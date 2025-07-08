package com.project.work_hive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.work_hive.entities.dto.CompanyDTO;
import com.project.work_hive.entities.dto.CreateCompanyRequest;
import com.project.work_hive.services.company.CompanyService;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    // POST /api/companies/create/{superAdminId}
    @PostMapping("/create/{superAdminId}")
    public ResponseEntity<CompanyDTO> createCompany( @RequestBody CreateCompanyRequest request,  @PathVariable Integer superAdminId) {

        CompanyDTO company = companyService.createCompany(request, superAdminId);
        return ResponseEntity.ok(company);
    }

    @DeleteMapping("/delete/{companyId}")
    public ResponseEntity<String> deleteCompany(@PathVariable Integer companyId) {
        companyService.deleteCompany(companyId);
        return ResponseEntity.ok("Company deleted successfully.");
    }
}
