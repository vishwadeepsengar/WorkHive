package com.project.work_hive.services.Employee;

import com.project.work_hive.entities.dto.EmployeeDTO;



public interface EmployeeService {

void createEmployee(EmployeeDTO employeeDTO);
EmployeeDTO verifyEmployee(String email, String password);
}