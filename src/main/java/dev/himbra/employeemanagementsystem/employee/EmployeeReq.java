package dev.himbra.employeemanagementsystem.employee;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public record EmployeeReq(
        @NotBlank(message = "firstname is mandatory")
        String firstname,
        @NotBlank(message = "lastname is mandatory")
        String lastname,
        @NotEmpty(message = "Salary is mandatory") @Positive(message = "Salary must be positive")
        double salary,
        @NotEmpty(message = "age is empty")
        int age
) {
}
