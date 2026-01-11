package com.nexova.backend.repo;

import com.nexova.backend.model.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {

    List<ProductImage> findByProductId(Long id);
}
