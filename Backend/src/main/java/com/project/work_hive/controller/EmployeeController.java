package com.project.work_hive.controller;

import com.project.work_hive.entities.dbo.Employee;
import org.springframework.web.bind.annotation.*;
import com.project.work_hive.entities.dto.EmployeeDTO;
import com.project.work_hive.entities.dto.loginDTO;
import com.project.work_hive.services.Employee.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.List;


@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/create")
   public String createEmployee( @RequestBody EmployeeDTO request) {

      employeeService.createEmployee(request) ;
        return "Employee created successfully";

    }
     @PostMapping("/verify/")
    public ResponseEntity<EmployeeDTO> verifyEmployee(@RequestBody loginDTO request) {
        EmployeeDTO employee = employeeService.verifyEmployee(request.getEmail(), request.getPassword());
        if (employee == null) {
            return ResponseEntity.status(401).body(null); // Unauthorized
        }
        return ResponseEntity.ok(employee);
}
@GetMapping("/all")
    public List<Employee> getAll(){
        return  employeeService.getEmployee();
}
}
