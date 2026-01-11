package com.nexova.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "newsletter_subscribers", uniqueConstraints = {
        @UniqueConstraint(columnNames = "email")
})
public class NewsletterSubscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false, updatable = false)
    private LocalDateTime subscribedAt;

    @PrePersist
    void onCreate() {
        this.subscribedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public LocalDateTime getSubscribedAt() { return subscribedAt; }
}
