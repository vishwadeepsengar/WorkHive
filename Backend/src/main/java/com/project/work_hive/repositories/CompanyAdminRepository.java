package com.project.work_hive.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.work_hive.entities.dbo.CompanyAdmin;

public interface CompanyAdminRepository extends JpaRepository<CompanyAdmin, Integer > {
    boolean existsByCompany_IdAndIsPrimary(Integer companyId, boolean isPrimary);
    // You can add custom queries later if needed
    
}
