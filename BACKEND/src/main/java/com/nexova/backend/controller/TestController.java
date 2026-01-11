package com.nexova.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/gen")
    public String gen() {
        return new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder()
                .encode("admin123");
    }
}
