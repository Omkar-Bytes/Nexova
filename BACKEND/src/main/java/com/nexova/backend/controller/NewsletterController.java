package com.nexova.backend.controller;

import com.nexova.backend.model.NewsletterSubscriber;
import com.nexova.backend.repo.NewsletterRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "http://localhost:5173")
public class NewsletterController {

    private final NewsletterRepository repo;

    public NewsletterController(NewsletterRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public String subscribe(@RequestBody NewsletterSubscriber sub) {

        if (sub.getEmail() == null || sub.getEmail().isBlank()) {
            throw new RuntimeException("Email required");
        }

        if (repo.existsByEmail(sub.getEmail())) {
            return "Already subscribed";
        }

        repo.save(sub);
        return "Subscribed successfully";
    }
}
