package com.example.sprintdash.Controllers;

import com.example.sprintdash.Models.ScrumMember;
import com.example.sprintdash.Services.ScrumMemberServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/member")
public class ScrumMemberController {
    @Autowired
    ScrumMemberServices scrumMemberServices;

    @GetMapping("/all")
    public List<ScrumMember> getAllScrumMembers() {
        return scrumMemberServices.getAllScrumMembers();
    }
    @GetMapping("/{email}")
    public Optional<ScrumMember> getScrumMemberByEmail(@PathVariable String email){
        return scrumMemberServices.getScrumMemberByEmail(email);
    }
    @PutMapping("/update")
    public void calculateMemberStoryPoints(){
        scrumMemberServices.calculateMemberStoryPoints();
    }
}
