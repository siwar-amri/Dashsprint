package com.example.sprintdash.Services;

import com.example.sprintdash.Models.AppUser;
import com.example.sprintdash.Models.LoginRequest;
import com.example.sprintdash.Repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final AppUserRepository appUserRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    @Autowired
    public LoginService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public boolean authenticate(LoginRequest loginRequest) {
        // Check if a user exists with the provided email
        Optional<AppUser> appUserOptional = appUserRepository.findByEmail(loginRequest.getEmail());

        // If user exists and password matches, return true
        if (appUserOptional.isPresent()) {
            AppUser appUser = appUserOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), appUser.getPassword())) {
                return true;
            }
        }

        // Return false if user does not exist or password does not match
        return false;
    }
}
