package dev.himbra.employeemanagementsystem.authentication;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

@Builder
@Getter @Setter
public class RegisterRequest {
    @NotBlank(message = "firstname must not be blank")
    private String firstname;
    @NotBlank(message = "lastname must not be blank")
    private String lastname;
    @NotBlank(message = "email must not be blank")
    private String email;
    @Size(min=8,message = "password should at least be of 8 character minimum")
    private String password;
}
