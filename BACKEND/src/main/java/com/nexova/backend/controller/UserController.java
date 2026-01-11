package com.nexova.backend.controller;

import com.nexova.backend.model.User;
import com.nexova.backend.repo.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepo,
                          PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @PutMapping("/profile/{id}")
    public User updateProfile(
            @PathVariable Long id,
            @RequestBody UpdateProfileRequest req,
            Authentication authentication
    ) {
        User user = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // SECURITY FIX
        if (!authentication.getName().equals(user.getId().toString())) {
            throw new RuntimeException("Unauthorized");
        }

        if (req.email() != null && !req.email().isBlank()) {
            user.setEmail(req.email());
        }

        if (req.password() != null && !req.password().isBlank()) {
            user.setPassword(passwordEncoder.encode(req.password()));
        }

        return userRepo.save(user);
    }

    public record UpdateProfileRequest(String email, String password) {}
}
