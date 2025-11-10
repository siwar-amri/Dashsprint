package com.example.sprintdash.Controllers;

public class AuthenticationResponse {
    private String message;
    private String token;

    public AuthenticationResponse(String message, String token) {
        this.message = message;
        this.token = token;
    }

    // Getters and setters
}
