package com.nolocardeno.backend.dto;

import com.nolocardeno.backend.model.enums.DocumentStatus;
import com.nolocardeno.backend.model.enums.DocumentType;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DocumentResponse {

    private Long id;
    private DocumentType type;
    private String title;
    private String category;
    private String storeName;
    private BigDecimal amount;
    private LocalDate issueDate;
    private LocalDate expiryDate;
    private Long daysRemaining;
    private String imagePath;
    private Boolean aiProcessed;
    private String notes;
    private DocumentStatus status;
    private Long duplicateOfId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
