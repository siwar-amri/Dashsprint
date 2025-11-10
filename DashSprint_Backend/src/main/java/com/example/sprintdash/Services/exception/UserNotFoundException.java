package com.example.sprintdash.Services.exception;

public class UserNotFoundException extends RuntimeException {
        public UserNotFoundException(String message){
            super(message);
        }
    }

