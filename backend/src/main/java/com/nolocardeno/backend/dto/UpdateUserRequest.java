package com.nolocardeno.backend.dto;

import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateUserRequest {

    private String name;

    @Email(message = "El email no tiene un formato válido")
    private String email;

    private String currentPassword;

    private String newPassword;
}
