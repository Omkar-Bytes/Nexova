package com.nexova.backend.controller;

import com.nexova.backend.model.NewsletterSubscriber;
import com.nexova.backend.repo.NewsletterRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/newsletter")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminNewsletterController {

    private final NewsletterRepository repo;

    public AdminNewsletterController(NewsletterRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<NewsletterSubscriber> getAllSubscribers() {
        return repo.findAll();
    }
}
