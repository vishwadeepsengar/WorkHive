package com.project.work_hive.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.project.work_hive.entities.dbo.CompanyType;


public interface CompanyTyperepository extends JpaRepository<CompanyType, Integer> {
    // You can add custom queries later if needed
}