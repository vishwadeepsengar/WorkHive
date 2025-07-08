package com.project.work_hive.services.company;

import com.project.work_hive.entities.dto.CompanyDTO;
import com.project.work_hive.entities.dto.CreateCompanyRequest;

public interface CompanyService {
    CompanyDTO createCompany(CreateCompanyRequest request, Integer superAdminId);
    void deleteCompany(Integer companyId);

}