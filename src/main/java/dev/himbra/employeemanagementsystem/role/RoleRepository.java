package dev.himbra.employeemanagementsystem.role;

import java.util.Optional;
public interface RoleRepository {
    Optional<Role> findByName(String roleName);
}
