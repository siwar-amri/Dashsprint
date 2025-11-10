package com.example.sprintdash.Services;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class PasswordEncoder {
    @Bean //so this is available for us to use
    public BCryptPasswordEncoder  bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    };
}
