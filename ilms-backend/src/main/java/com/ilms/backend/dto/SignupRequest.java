package com.ilms.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SignupRequest(
        @Email @NotBlank String email,
        @NotBlank String name,
        @NotBlank String password
) {}
