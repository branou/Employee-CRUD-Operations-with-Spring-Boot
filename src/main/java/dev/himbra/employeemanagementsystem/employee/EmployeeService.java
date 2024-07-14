package dev.himbra.employeemanagementsystem.employee;

import dev.himbra.employeemanagementsystem.base.PageResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface EmployeeService {
    Long createEmployee(EmployeeReq employee);
    Long updateEmployee(long id, EmployeeReq Employee);
    PageResponse<Employee> findAllEmployees(int page , int size);
    void deleteEmployee(long id);
    Optional<Employee> findById(long id);
}
