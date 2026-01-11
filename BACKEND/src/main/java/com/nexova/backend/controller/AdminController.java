package com.nexova.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.nexova.backend.model.Order;
import com.nexova.backend.model.Product;
import com.nexova.backend.model.User;
import com.nexova.backend.repo.OrderRepository;
import com.nexova.backend.repo.ProductRepository;
import com.nexova.backend.repo.UserRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private OrderRepository orderRepo;

    // ---------------- USERS ----------------

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepo.deleteById(id);
    }

    // ✅ UPDATE USER (name, email, role)
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User u) {
        User existing = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // update allowed fields
        existing.setName(u.getName());
        existing.setEmail(u.getEmail());
        existing.setRole(u.getRole());

        return userRepo.save(existing);
    }

 // ✅ CREATE NEW USER
    @PostMapping("/user")
    public User createUser(@RequestBody User u) {

        // If password is missing, block the request
        if (u.getPassword() == null || u.getPassword().trim().isEmpty()) {
            throw new RuntimeException("Password is required");
        }

        // Encode password
        String encoded = new BCryptPasswordEncoder().encode(u.getPassword());
        u.setPassword(encoded);

        // Basic validation defaults
        if (u.getRole() == null || u.getRole().trim().isEmpty()) {
            u.setRole("USER");   // default role
        }

        return userRepo.save(u);
    }


    // ---------------- PRODUCTS ----------------

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productRepo.deleteById(id);
    }

    // ✅ UPDATE PRODUCT (name, price, category, description, sellerName)
    @PutMapping("/product/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product p) {
        Product existing = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        existing.setName(p.getName());
        existing.setCategory(p.getCategory());
        existing.setPrice(p.getPrice());
        existing.setDescription(p.getDescription());
        existing.setSellerName(p.getSellerName());

        return productRepo.save(existing);
    }


    // ---------------- ORDERS ----------------

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
    
    @PutMapping("/order/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order updated) {

        Order o = orderRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        // ONLY update what admin is allowed to change
        if (updated.getStatus() != null) {
            o.setStatus(updated.getStatus());
        }

        // DO NOT TOUCH quantity / totalPrice here

        return orderRepo.save(o);
    }


    @DeleteMapping("/order/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderRepo.deleteById(id);
    }
}
