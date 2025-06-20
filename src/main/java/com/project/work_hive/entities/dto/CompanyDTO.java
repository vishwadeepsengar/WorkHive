package com.project.work_hive.entities.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CompanyDTO {
    private Integer id;
    private String name;
    private String description;
    private String companyTypeName;
    private String createdByName;
    private LocalDateTime createdAt;
}
