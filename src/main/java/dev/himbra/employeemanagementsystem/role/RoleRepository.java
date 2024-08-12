package dev.himbra.employeemanagementsystem.role;

import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface RoleRepository {
    Optional<Role> findByName(String roleName);
}
