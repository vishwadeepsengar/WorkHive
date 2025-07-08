package com.project.work_hive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.project.work_hive.entities.dto.CompanyAdminDTO;

import com.project.work_hive.services.company.CompanyAdminService;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/admin")
public class CompanyAdminController {

    @Autowired
    private CompanyAdminService companyadminService;

    @PostMapping("/createAdmin")
      public ResponseEntity<CompanyAdminDTO> createCompanyAdmin( @RequestBody CompanyAdminDTO request) {

        CompanyAdminDTO admin = companyadminService.createCompanyAdmin(request)   ;
        return ResponseEntity.ok(admin);
    }
  
    
}