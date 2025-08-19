package com.project.work_hive.payloads;


import com.project.work_hive.entities.dbo.Employee;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class EmployeeDetails implements UserDetails {

    private final Employee employee;

    public EmployeeDetails(Employee employee) {
        this.employee = employee;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // assuming Role entity has a getName() method
        return Collections.singletonList(
                new SimpleGrantedAuthority(employee.getRole().getName())
        );
    }

    @Override
    public String getPassword() {
        return employee.getPassword();
    }

    @Override
    public String getUsername() {
        return employee.getEmail(); // using email as username
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // you can add flags later if needed
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Employee getEmployee() {
        return employee;
    }
}

