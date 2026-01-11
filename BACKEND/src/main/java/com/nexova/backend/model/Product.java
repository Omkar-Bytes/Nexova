package com.nexova.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	private String category;
	private Double price;

	@Column(columnDefinition = "TEXT")
	private String description;

	@Column(name = "seller_name")
	private String sellerName;

	@Column(nullable = false)
	private Long sellerId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String n) {
		this.name = n;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String c) {
		this.category = c;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double p) {
		this.price = p;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String d) {
		this.description = d;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getSellerId() {
		return sellerId;
	}

	public void setSellerId(Long sellerId) {
		this.sellerId = sellerId;
	}

}
