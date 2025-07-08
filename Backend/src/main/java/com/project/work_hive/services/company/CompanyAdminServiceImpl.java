package com.project.work_hive.services.company;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.work_hive.entities.dbo.CompanyAdmin;
import com.project.work_hive.entities.dbo.Employee;
import com.project.work_hive.entities.dto.CompanyAdminDTO;
import com.project.work_hive.repositories.CompanyAdminRepository;
import com.project.work_hive.repositories.CompanyRepository;
import com.project.work_hive.repositories.EmployeeRepository;
import com.project.work_hive.repositories.RoleRepository;
@Service
public class CompanyAdminServiceImpl implements CompanyAdminService {
    @Autowired
    private CompanyAdminRepository companyAdminRepository;
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ModelMapper modelMapper;
     @Autowired
    private CompanyRepository companyRepository;
    @Override
    public CompanyAdminDTO createCompanyAdmin(CompanyAdminDTO request) {
       
        // update employee detail role admin
        Employee employee = employeeRepository.findById(request.getEmployeeId())
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        // ensure that there is no existin primary admin for the company
       if (request.isPrimary() && companyAdminRepository.existsByCompany_IdAndIsPrimary(request.getCompanyId(), true)) {
    throw new RuntimeException("There is already a primary admin for this company.");
}

        employee.setRole(roleRepository.findById(1)
                .orElseThrow(() -> new RuntimeException("Role not found")));
        employeeRepository.save(employee);


            CompanyAdmin companyAdmin = new CompanyAdmin();
         companyAdmin.setCompany(companyRepository.findById(request.getCompanyId())
                .orElseThrow(() -> new RuntimeException("Company not found")));
    
        companyAdmin.setEmployee(employee);
        companyAdmin.setPrimary(request.isPrimary());
        companyAdmin = companyAdminRepository.save(companyAdmin);

        return modelMapper.map(companyAdmin, CompanyAdminDTO.class);
        // Implementation logic to create a company admin
       
    }

  
    
}
