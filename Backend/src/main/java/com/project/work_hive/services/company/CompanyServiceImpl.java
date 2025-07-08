package com.project.work_hive.services.company;



import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.work_hive.entities.dbo.Company;

import com.project.work_hive.entities.dbo.CompanyType;
import com.project.work_hive.entities.dbo.Employee;

import com.project.work_hive.entities.dto.CompanyDTO;
import com.project.work_hive.entities.dto.CreateCompanyRequest;


import com.project.work_hive.repositories.CompanyRepository;
import com.project.work_hive.repositories.CompanyTyperepository;
import com.project.work_hive.repositories.EmployeeRepository;

@Service
public class CompanyServiceImpl implements CompanyService {
       @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyTyperepository companyTypeRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

   

    @Autowired
    private ModelMapper modelMapper;
    // Add methods to handle company operations here, such as creating, updating, deleting companies,
    //creating company 
    
@Override
public CompanyDTO createCompany(CreateCompanyRequest request, Integer superAdminId) {
 
   
    // Get super admin
    Employee superAdmin = employeeRepository.findById(superAdminId)
            .orElseThrow(() -> new RuntimeException("Super admin not found"));

    // 🔒 Ensure only SUPER_ADMIN can create company
    if (!"Super Admin".equals(superAdmin.getRole().getName())) {
        throw new SecurityException("Only SUPER_ADMIN can create a company.");
    }

    // Get company type
    CompanyType type = companyTypeRepository.findById(request.getCompanyTypeId())
            .orElseThrow(() -> new RuntimeException("Invalid company type"));

    // Create and save company
    Company company = new Company();
    company.setName(request.getName());
    company.setDescription(request.getDescription());
    company.setCompanyType(type);
    company.setCreated_by(superAdmin.getFirstName() + " " + superAdmin.getLastName());
    company = companyRepository.save(company);

    // Assign company and role to given employees
 

    return modelMapper.map(company, CompanyDTO.class);
}

@Override
public void deleteCompany(Integer companyId) {
     Company company = companyRepository.findById(companyId)
                .orElseThrow(() -> new RuntimeException("Company not found with id: " + companyId));
        companyRepository.delete(company);
    }

}
