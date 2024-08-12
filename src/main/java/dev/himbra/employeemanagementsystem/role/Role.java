package dev.himbra.employeemanagementsystem.role;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.himbra.employeemanagementsystem.admin.Admin;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table
@Setter @Getter @AllArgsConstructor @NoArgsConstructor @Builder
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @JsonIgnore
    @ManyToMany
    @JoinTable(joinColumns=@JoinColumn(name="role_Id"),
    inverseJoinColumns = @JoinColumn(name="admin_Id"))
    private List<Admin> admins;
}
