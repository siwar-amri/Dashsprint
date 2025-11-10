package com.example.sprintdash;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class SprintDashApplication {

    public static void main(String[] args) {
        SpringApplication.run(SprintDashApplication.class, args);
    }

}
