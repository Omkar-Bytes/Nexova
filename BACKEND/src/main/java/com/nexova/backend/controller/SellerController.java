package com.nexova.backend.controller;

import com.nexova.backend.model.User;
import com.nexova.backend.repo.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/seller")
@CrossOrigin(origins = "http://localhost:5173")
public class SellerController {

    private final UserRepository userRepo;

    public SellerController(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    // ---------- SELLER PROFILE ----------
    @GetMapping("/me")
    public Map<String, Object> myProfile(Authentication auth) {

        User seller = userRepo.findByEmail(auth.getName());

        if (seller == null || !"SELLER".equals(seller.getRole())) {
        	throw new ResponseStatusException(HttpStatus.FORBIDDEN);

        }

        Map<String, Object> resp = new HashMap<>();
        resp.put("id", seller.getId());
        resp.put("email", seller.getEmail());
        resp.put("storeName", seller.getStoreName());
        resp.put("role", seller.getRole());

        return resp;
    }
}
