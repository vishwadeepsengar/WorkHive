package com.project.work_hive.entities.dbo;


import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;



import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "company_admin")
@Getter
@Setter 
@NoArgsConstructor
public class CompanyAdmin {
    
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

     
    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;
    
   @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
    
    @Column(name = "is_primary")
    private boolean isPrimary;
    
    @CreationTimestamp
    private LocalDateTime createdAt;
}

