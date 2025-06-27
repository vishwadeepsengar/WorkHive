package com.project.work_hive.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.work_hive.entities.dbo.CompanyAdmin;
import com.project.work_hive.payloads.CompanyAdminId;

public interface CompanyAdminRepository extends JpaRepository<CompanyAdmin, CompanyAdminId> {
    // You can add custom queries later if needed
    
}
