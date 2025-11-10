package com.example.sprintdash.Controllers;

import com.example.sprintdash.Models.RegistrationRequest;
import com.example.sprintdash.Services.RegistrationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping(path ="/api/register/")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {


    private RegistrationService registrationService;

    @PostMapping(path="/", consumes = {"*/*"})
    public String register (@RequestBody RegistrationRequest request){
        return registrationService.register(request);
    }


    @GetMapping(path = "confirm")
    public RedirectView confirm(@RequestParam("token") String token) {
        String result = registrationService.confirmToken(token);

        if ("confirmed".equals(result)) {
            // Redirect to the Angular app home page
            return new RedirectView("http://localhost:4200/");
        } else {
            // Handle other cases, maybe return an error page or a different redirection
            return new RedirectView("http://localhost:4200//error");
        }
    }





}
