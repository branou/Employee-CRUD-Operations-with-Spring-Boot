package dev.himbra.employeemanagementsystem.employee;

import dev.himbra.employeemanagementsystem.base.PageResponse;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService{
    private final EmployeeRepository employeeRepository;
    @Override
    public Long createEmployee(EmployeeReq employee) {
        Employee emp=Employee.builder()
                .id(null).firstname(employee.firstname())
                .lastname(employee.lastname()).age(employee.age())
                .salary(employee.salary())
                .build();
        return employeeRepository.save(emp).getId();
    }

    @Override
    public Long updateEmployee(long id, EmployeeReq employee) {
        Employee emp = findById(id).orElseThrow(()-> new EntityNotFoundException("employee not found with this id "+ id));
        emp.setFirstname(employee.firstname());
        emp.setLastname(employee.lastname());
        emp.setAge(employee.age());
        emp.setSalary(employee.salary());
        return employeeRepository.save(emp).getId();
    }

    @Override
    public PageResponse<Employee> findAllEmployees(int page, int size) {
        Pageable pageable= PageRequest.of(page,size);
        Page<Employee> employees = employeeRepository.findAll(pageable);
        List<Employee> listEmployees=employees.stream().toList();
        return new PageResponse<>(
                listEmployees,
                employees.getNumber(),
                employees.getSize(),
                employees.getTotalElements(),
                employees.getTotalPages(),
                employees.isFirst(),
                employees.isLast()
        );
    }

    @Override
    public void deleteEmployee(long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public Optional<Employee> findById(long id) {
        return employeeRepository.findById(id);
    }
}
