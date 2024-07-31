
package dev.himbra.employeemanagementsystem.employee;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")
@Getter @Setter @AllArgsConstructor @NoArgsConstructor @Builder
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    private double salary;
    private int age;
}
