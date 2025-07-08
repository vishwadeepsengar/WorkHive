 package com.project.work_hive.entities.dto;
 import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateCompanyRequest {
    private String name;
    private String description;
    private Integer companyTypeId;
}