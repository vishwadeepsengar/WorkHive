package com.project.work_hive.entities.dto;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CompanyAdminDTO {
    private Integer companyId;
    private Integer employeeId;
      private boolean isPrimary;
}
