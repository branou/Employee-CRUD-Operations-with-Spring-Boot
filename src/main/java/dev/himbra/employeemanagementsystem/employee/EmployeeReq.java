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
        @NotNull(message = "Salary is mandatory") @Positive(message = "Salary must be positive")
        double salary,
        @NotNull(message = "age is empty")
        int age
) {
}
