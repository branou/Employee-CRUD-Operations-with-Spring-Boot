package dev.himbra.employeemanagementsystem.authentication;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Getter
@Setter @Builder
public class LoginRequest {
    @NotBlank(message ="email must not be blank")
    private String email;
    @NotBlank(message = "password is blank")
    @Size(min=8,message = "password should at least be of 8 character minimum")
    private String password;
}
