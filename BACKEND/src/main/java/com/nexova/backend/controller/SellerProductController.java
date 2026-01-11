package com.nexova.backend.controller;

import com.nexova.backend.model.Product;
import com.nexova.backend.model.User;
import com.nexova.backend.repo.ProductRepository;
import com.nexova.backend.repo.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/seller/products")
@CrossOrigin(origins = "http://localhost:5173")
public class SellerProductController {

    private final ProductRepository productRepo;
    private final UserRepository userRepo;

    public SellerProductController(ProductRepository productRepo, UserRepository userRepo) {
        this.productRepo = productRepo;
        this.userRepo = userRepo;
    }

    // ---------- GET SELLER PRODUCTS ----------
    @GetMapping
    public List<Product> myProducts(Authentication auth) {

        User seller = userRepo.findByEmail(auth.getName());

        if (seller == null || !"SELLER".equals(seller.getRole())) {
            throw new RuntimeException("Forbidden");
        }

        return productRepo.findBySellerId(seller.getId());
    }

    // ---------- ADD PRODUCT ----------
    @PostMapping
    public Product addProduct(
            @RequestBody Product p,
            Authentication auth
    ) {
        User seller = userRepo.findByEmail(auth.getName());

        if (seller == null || !"SELLER".equals(seller.getRole())) {
            throw new RuntimeException("Forbidden");
        }

        p.setSellerId(seller.getId());
        p.setSellerName(seller.getStoreName());

        return productRepo.save(p);
    }

    // ---------- UPDATE PRODUCT ----------
    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable Long id,
            @RequestBody Product data,
            Authentication auth
    ) {
        User seller = userRepo.findByEmail(auth.getName());
        Product p = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (!p.getSellerId().equals(seller.getId())) {
        	throw new ResponseStatusException(HttpStatus.FORBIDDEN);

        }

        p.setName(data.getName());
        p.setPrice(data.getPrice());
        p.setCategory(data.getCategory());
        p.setDescription(data.getDescription());

        return productRepo.save(p);
    }

    // ---------- DELETE PRODUCT ----------
    @DeleteMapping("/{id}")
    public void deleteProduct(
            @PathVariable Long id,
            Authentication auth
    ) {
        User seller = userRepo.findByEmail(auth.getName());
        Product p = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (!p.getSellerId().equals(seller.getId())) {
            throw new RuntimeException("Forbidden");
        }

        productRepo.delete(p);
    }
}
