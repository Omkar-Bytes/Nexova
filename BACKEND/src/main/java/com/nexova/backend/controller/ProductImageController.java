package com.nexova.backend.controller;

import com.nexova.backend.model.ProductImage;
import com.nexova.backend.repo.ProductImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product-images")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductImageController {

    @Autowired
    private ProductImageRepository repo;

    @PostMapping
    public ProductImage addImage(@RequestBody ProductImage img) {
        return repo.save(img);
    }
}
