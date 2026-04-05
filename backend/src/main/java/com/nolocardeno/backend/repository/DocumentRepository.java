package com.nolocardeno.backend.repository;

import com.nolocardeno.backend.model.Document;
import com.nolocardeno.backend.model.enums.DocumentStatus;
import com.nolocardeno.backend.model.enums.DocumentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface DocumentRepository extends JpaRepository<Document, Long> {

    List<Document> findByUserIdOrderByCreatedAtDesc(Long userId);

    List<Document> findByUserIdAndType(Long userId, DocumentType type);

    List<Document> findByUserIdAndStatus(Long userId, DocumentStatus status);

    List<Document> findByExpiryDateBeforeAndStatusNot(LocalDate date, DocumentStatus status);

    List<Document> findByUserIdAndStoreNameIgnoreCaseAndIssueDateAndAmount(
            Long userId, String storeName, LocalDate issueDate, java.math.BigDecimal amount);
}
