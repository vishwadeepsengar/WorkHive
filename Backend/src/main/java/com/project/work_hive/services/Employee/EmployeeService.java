package com.project.work_hive.services.Employee;

import com.project.work_hive.entities.dbo.Employee;
import com.project.work_hive.entities.dto.EmployeeDTO;

import java.util.List;


public interface EmployeeService {

void createEmployee(EmployeeDTO employeeDTO);
EmployeeDTO verifyEmployee(String email, String password);
List<Employee> getEmployee();
}