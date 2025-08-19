package com.project.work_hive.services;



import com.project.work_hive.payloads.AuthRequest;
import com.project.work_hive.payloads.AuthResponse;
import com.project.work_hive.payloads.EmployeeDetails;
import com.project.work_hive.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    public AuthService(AuthenticationManager authenticationManager, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public AuthResponse login(AuthRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );

            EmployeeDetails employeeDetails = (EmployeeDetails) authentication.getPrincipal();

            // Generate JWT (you can add role as extra claim if you want)
            String token = jwtService.generateToken(
                    employeeDetails.getUsername(),
                    new HashMap<>() {{
                        put("role", employeeDetails.getEmployee().getRole().getName());
                    }}
            );

            return new AuthResponse(token);

        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid credentials", e);
        }
    }
}

