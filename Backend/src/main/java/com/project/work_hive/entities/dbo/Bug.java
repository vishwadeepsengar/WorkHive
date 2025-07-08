package com.project.work_hive.entities.dbo;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import com.project.work_hive.payloads.BugStatus;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "bugs")
@Getter 
@Setter 
@NoArgsConstructor
public class Bug {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;
    
    @ManyToOne
    @JoinColumn(name = "reported_by", nullable = false)
    private Employee reportedBy;
    
    @ManyToOne
    @JoinColumn(name = "assigned_to")
    private Employee assignedTo; // Can be null initially
    
    @Column(nullable = false)
    private String title;
    
    private String description;
    
    @Enumerated(EnumType.STRING)
    private BugStatus status = BugStatus.REPORTED;
    
    
    @CreationTimestamp
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

