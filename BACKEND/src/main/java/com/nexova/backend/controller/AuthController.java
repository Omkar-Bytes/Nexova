package com.nexova.backend.controller;

import com.nexova.backend.model.User;
import com.nexova.backend.repo.UserRepository;
import com.nexova.backend.security.JwtService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AuthController {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthController(UserRepository userRepo,
                          PasswordEncoder passwordEncoder,
                          JwtService jwtService) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // ================== SIGNUP ==================

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User u) {

        if (userRepo.findByEmail(u.getEmail()) != null)
            return ResponseEntity.badRequest().body("Email already exists");

        u.setPassword(passwordEncoder.encode(u.getPassword()));
        u.setRole(
        	    u.getRole() == null
        	        ? "USER"
        	        : u.getRole().replace("ROLE_", "").toUpperCase()
        	);


        userRepo.save(u);
        return ResponseEntity.ok("Signup success");
    }

    // ================== LOGIN ==================

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req,
                                   HttpServletResponse res) {

        User user = userRepo.findByEmail(req.email());
        if (user == null || !passwordEncoder.matches(req.password(), user.getPassword())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        Cookie cookie = new Cookie("refresh_token", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(7 * 24 * 60 * 60);
        res.addCookie(cookie);

        return ResponseEntity.ok(
                new LoginResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getRole(),
                        accessToken
                )
        );
    }

    // ================== REFRESH ==================

    @PostMapping("/refresh")
    public ResponseEntity<?> refresh(
            @CookieValue(name = "refresh_token", required = false) String refreshToken) {

        if (refreshToken == null)
            return ResponseEntity.status(401).body("No refresh token");

        Long userId;
        try {
            userId = Long.parseLong(jwtService.extractUsername(refreshToken));
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid refresh token");
        }

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("Invalid refresh token"));

        return ResponseEntity.ok(jwtService.generateAccessToken(user));
    }

    // ================== LOGOUT ==================

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletResponse res) {
        Cookie cookie = new Cookie("refresh_token", null);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        res.addCookie(cookie);
        return ResponseEntity.ok("Logged out");
    }

    // ================== RECORDS ==================

    public record LoginRequest(String email, String password) {}
    public record LoginResponse(Long id, String name, String email, String role, String token) {}
}
