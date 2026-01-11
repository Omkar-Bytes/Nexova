package com.nexova.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private Long productId;

    @Column(nullable = false, length = 10)
    private String productSource;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private Double totalPrice;

    @Column(nullable = false, length = 20)
    private String status;

    @Column(nullable = false, length = 500)
    private String address;

    @Column(name = "payment_method", length = 50)
    private String paymentMethod;

    // ✅ ADD THIS - Payment status field
    @Column(name = "payment_status", length = 20)
    private String paymentStatus;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        if (this.status == null) {
            this.status = "PLACED";
        }
        if (this.paymentMethod == null) {
            this.paymentMethod = "COD";
        }
        // ✅ Default payment status to PENDING
        if (this.paymentStatus == null) {
            this.paymentStatus = "PENDING";
        }
    }

    // All existing getters
    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }

    public String getProductSource() { return productSource; }
    public void setProductSource(String productSource) { this.productSource = productSource; }

    public Integer getQuantity() { return quantity; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }

    public Double getTotalPrice() { return totalPrice; }
    public void setTotalPrice(Double totalPrice) { this.totalPrice = totalPrice; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }

    // ✅ ADD THIS - Payment status getter/setter
    public String getPaymentStatus() { return paymentStatus; }
    public void setPaymentStatus(String paymentStatus) { this.paymentStatus = paymentStatus; }

    public LocalDateTime getCreatedAt() { return createdAt; }
}