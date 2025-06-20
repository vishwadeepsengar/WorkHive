 package com.project.work_hive.entities.dto;
 import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateCompanyRequest {
    private String name;
    private String description;
    private Integer companyTypeId;
    private List<String> adminEmails; // exactly 2
}