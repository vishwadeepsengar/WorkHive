package com.project.work_hive.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.work_hive.entities.dbo.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    // You can add custom queries later if needed
    
}
