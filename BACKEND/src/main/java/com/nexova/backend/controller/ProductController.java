package com.nexova.backend.controller;

import com.nexova.backend.model.Product;
import com.nexova.backend.model.ProductImage;
import com.nexova.backend.model.User;
import com.nexova.backend.repo.ProductRepository;
import com.nexova.backend.repo.ProductImageRepository;
import com.nexova.backend.repo.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductRepository productRepo;
    private final ProductImageRepository imageRepo;
    private final UserRepository userRepo;

    public ProductController(
            ProductRepository productRepo,
            ProductImageRepository imageRepo,
            UserRepository userRepo
    ) {
        this.productRepo = productRepo;
        this.imageRepo = imageRepo;
        this.userRepo = userRepo;
    }

    // ---------- ADD PRODUCT + IMAGES (SELLER ONLY) ----------
    @PostMapping("/full")
    public Map<String, Object> addFullProduct(
            @RequestBody Map<String, Object> data,
            Authentication auth
    ) {
        String email = auth.getName();
        User seller = userRepo.findByEmail(email);

        if (seller == null || !"SELLER".equals(seller.getRole())) {
            throw new RuntimeException("Forbidden");
        }

        Product p = new Product();
        p.setName((String) data.get("name"));
        p.setCategory((String) data.get("category"));
        p.setPrice(Double.valueOf(data.get("price").toString()));
        p.setDescription((String) data.get("description"));
        p.setSellerId(seller.getId());
        p.setSellerName(seller.getStoreName());

        Product saved = productRepo.save(p);

        List<String> imageUrls = (List<String>) data.get("imageUrls");
        if (imageUrls != null) {
            for (String url : imageUrls) {
                if (url == null || url.trim().isEmpty()) continue;
                ProductImage img = new ProductImage();
                img.setProductId(saved.getId());
                img.setImageUrl(url.trim());
                imageRepo.save(img);
            }
        }

        Map<String, Object> resp = new HashMap<>();
        resp.put("id", saved.getId());
        resp.put("name", saved.getName());
        resp.put("category", saved.getCategory());
        resp.put("price", saved.getPrice());
        resp.put("description", saved.getDescription());
        resp.put("sellerId", saved.getSellerId());
        resp.put("sellerName", saved.getSellerName());
        resp.put("imageUrls", imageUrls != null ? imageUrls : List.of());

        return resp;
    }

    // ---------- GET ALL PRODUCTS (PUBLIC) ----------
    @GetMapping
    public List<Map<String, Object>> getAll() {
        List<Product> allProducts = productRepo.findAll();
        List<Map<String, Object>> list = new ArrayList<>();

        for (Product p : allProducts) {
            List<ProductImage> imgs = imageRepo.findByProductId(p.getId());
            List<String> urls = new ArrayList<>();
            for (ProductImage img : imgs) urls.add(img.getImageUrl());

            Map<String, Object> m = new HashMap<>();
            m.put("id", p.getId());
            m.put("name", p.getName());
            m.put("price", p.getPrice());
            m.put("category", p.getCategory());
            m.put("description", p.getDescription());
            m.put("sellerId", p.getSellerId());
            m.put("sellerName", p.getSellerName());
            m.put("imageUrls", urls);

            list.add(m);
        }

        return list;
    }

    // ---------- GET PRODUCT BY ID (PUBLIC) ----------
    @GetMapping("/{id}")
    public Map<String, Object> getById(@PathVariable Long id) {

        Product p = productRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        List<ProductImage> imgs = imageRepo.findByProductId(p.getId());
        List<String> urls = new ArrayList<>();
        for (ProductImage img : imgs) urls.add(img.getImageUrl());

        Map<String, Object> m = new HashMap<>();
        m.put("id", p.getId());
        m.put("name", p.getName());
        m.put("price", p.getPrice());
        m.put("category", p.getCategory());
        m.put("description", p.getDescription());
        m.put("sellerId", p.getSellerId());
        m.put("sellerName", p.getSellerName());
        m.put("imageUrls", urls);

        return m;
    }
}
