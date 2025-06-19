package com.project.work_hive.entities.dbo;


import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import com.project.work_hive.payloads.CompanyAdminId;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "company_admins")
@Getter
@Setter 
@NoArgsConstructor
public class CompanyAdmin {
    
    @EmbeddedId
    private CompanyAdminId id;
    
    @ManyToOne
    @MapsId("companyId")  // Maps to the companyId part of the composite key
    @JoinColumn(name = "company_id")
    private Company company;
    
    @ManyToOne
    @MapsId("employeeId")  // Maps to the employeeId part of the composite key
    @JoinColumn(name = "employee_id")
    private Employee employee;
    
    @Column(name = "is_primary")
    private boolean isPrimary;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
}

