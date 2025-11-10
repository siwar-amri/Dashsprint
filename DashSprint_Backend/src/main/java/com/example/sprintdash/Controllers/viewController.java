package com.example.sprintdash.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class viewController {

    @GetMapping(path="/api/register/")
    public String getSignupPage() {
        return "signup";  // This refers to the signup.html in src/main/resources/templates
    }

}
