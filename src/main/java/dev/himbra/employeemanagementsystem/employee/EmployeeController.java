package dev.himbra.employeemanagementsystem.employee;

import dev.himbra.employeemanagementsystem.base.PageResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;
    @GetMapping("")
    public ResponseEntity<PageResponse<Employee>> findAll(@RequestParam int page,@RequestParam int size){
        return ResponseEntity.ok(employeeService.findAllEmployees(page,size));
    }
    @GetMapping("/all")
    public ResponseEntity<List<Employee>> findAll(){
        return ResponseEntity.ok(employeeService.findAll());
    }
    @PostMapping("/save")
    public ResponseEntity<Long> saveEmployee(@Valid @RequestBody EmployeeReq employee){
        return ResponseEntity.ok(employeeService.createEmployee(employee));
    }
    @PatchMapping("/update/{id}")
    public ResponseEntity<Long> updateEmployee(@Valid @RequestBody EmployeeReq employeeReq,@PathVariable Long id){
        return ResponseEntity.ok(employeeService.updateEmployee(id,employeeReq));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }

}
