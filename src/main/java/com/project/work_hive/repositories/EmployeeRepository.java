package com.project.work_hive.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.work_hive.entities.dbo.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

     @Query("SELECT e FROM Employee e WHERE e.email = :email AND e.password = :password")
    Employee findByEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
