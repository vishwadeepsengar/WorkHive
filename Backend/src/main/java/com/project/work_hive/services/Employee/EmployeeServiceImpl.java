package com.project.work_hive.services.Employee;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.project.work_hive.entities.dbo.Employee;

import com.project.work_hive.entities.dto.EmployeeDTO;
import com.project.work_hive.repositories.EmployeeRepository;
import com.project.work_hive.repositories.RoleRepository;

import java.util.List;

@Service
public class EmployeeServiceImpl  implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
   private RoleRepository roleRepository;
  
    @Override
    public void createEmployee(EmployeeDTO request) {
        
   
   Employee employee = new Employee();
    employee.setFirstName(request.getFirstName());
    employee.setLastName(request.getLastName());
    employee.setPhone(request.getPhone());
    employee.setRole(roleRepository.findById(4)
            .orElseThrow(() -> new RuntimeException("Role not found")));

    employee.setEmail(request.getEmail());
    employee.setPassword(new BCryptPasswordEncoder(12).encode(request.getPassword()));

    employeeRepository.save(employee);
    
    

    }
    @Override
    public EmployeeDTO verifyEmployee(String email, String password) {
      
        Employee employee = employeeRepository.findByEmailAndPassword(email, password);
        if (employee == null) {
            return null; // or throw an exception
        }
        
        ModelMapper modelMapper = new ModelMapper();
        EmployeeDTO employeeDTO = modelMapper.map(employee, EmployeeDTO.class);
        return employeeDTO;
    }
 @Override
  public List<Employee> getEmployee(){
        return  employeeRepository.findAll();

 }
    
}
