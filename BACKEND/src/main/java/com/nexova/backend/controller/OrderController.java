package com.nexova.backend.controller;

import com.nexova.backend.model.Order;
import com.nexova.backend.model.User;
import com.nexova.backend.repo.OrderRepository;
import com.nexova.backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private UserRepository userRepo;

    // ================= PLACE ORDER (COD) =================
    @PostMapping
    public Order placeOrder(
            @RequestBody Order order,
            Authentication auth
    ) {
        if (auth == null) {
            throw new RuntimeException("Unauthorized");
        }

        User user = userRepo.findByEmail(auth.getName());
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        // 🔒 FORCE USER FROM TOKEN (NO SPOOFING)
        order.setUserId(user.getId());

        // ---------- VALIDATION ----------
        if (order.getProductId() == null) {
            throw new RuntimeException("productId required");
        }

        if (order.getProductSource() == null) {
            throw new RuntimeException("productSource required");
        }

        if (order.getQuantity() == null || order.getQuantity() < 1) {
            throw new RuntimeException("Invalid quantity");
        }

        if (order.getTotalPrice() == null || order.getTotalPrice() <= 0) {
            throw new RuntimeException("Invalid totalPrice");
        }

        if (order.getAddress() == null || order.getAddress().isBlank()) {
            throw new RuntimeException("Address is required");
        }

        // STATUS DEFAULTS TO PLACED (via @PrePersist)
        return orderRepo.save(order);
    }

    // ================= MY ORDERS =================
    @GetMapping("/my")
    public List<Order> myOrders(Authentication auth) {
        if (auth == null) {
            throw new RuntimeException("Unauthorized");
        }

        User user = userRepo.findByEmail(auth.getName());
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        return orderRepo.findByUserId(user.getId());
    }

    // ================= ADMIN =================
    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}
