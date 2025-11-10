package com.example.sprintdash.Controllers;

import com.example.sprintdash.Services.UpdateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/update")
public class UpdateController {
    @Autowired
    UpdateService updateService;
    @PutMapping("/jira")
    public void updateAll() {
        updateService.updateJira();
    }

    @PutMapping("/kpis")
    public void updateKpis(){
        updateService.updateKpis();
    }
}
