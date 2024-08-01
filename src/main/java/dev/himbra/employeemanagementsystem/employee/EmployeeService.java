package dev.himbra.employeemanagementsystem.employee;

import dev.himbra.employeemanagementsystem.base.PageResponse;

import java.util.List;
import java.util.Optional;

public interface EmployeeService {
    public Long createEmployee(EmployeeReq employee);
    public Long updateEmployee(long id, EmployeeReq employee) ;
    public PageResponse<Employee> findAllEmployees(int page, int size) ;
    public void deleteEmployee(long id);
    public Optional<Employee> findById(long id) ;
    public List<Employee> findAll();
    public List<Employee> search(String firstname);
}
