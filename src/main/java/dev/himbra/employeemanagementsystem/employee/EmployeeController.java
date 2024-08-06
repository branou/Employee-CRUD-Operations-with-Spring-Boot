package dev.himbra.employeemanagementsystem.employee;

import dev.himbra.employeemanagementsystem.base.PageResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employee")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;
    @Operation(summary = "find all employees")
    @GetMapping("")
    public ResponseEntity<PageResponse<Employee>> findAll(@RequestParam(name="page",defaultValue = "0",required = false) int page,
                                                          @RequestParam(name = "size", defaultValue = "10",required = false) int size){
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
    @PutMapping ("/update/{id}")
    public ResponseEntity<Long> updateEmployee(@Valid @RequestBody EmployeeReq employeeReq,@PathVariable Long id){
        return ResponseEntity.ok(employeeService.updateEmployee(id,employeeReq));
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/search/{firstname}")
    public ResponseEntity<List<Employee>> search(@PathVariable String firstname){
        return ResponseEntity.ok(employeeService.search(firstname));
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id){
        Optional<Employee> employee=employeeService.findById(id);
        return employee.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

}
