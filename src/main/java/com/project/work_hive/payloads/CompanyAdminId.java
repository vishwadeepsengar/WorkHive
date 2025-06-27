package com.project.work_hive.payloads;
import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter @Setter @NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class CompanyAdminId implements Serializable {
    private int companyId;
    private int employeeId;
}