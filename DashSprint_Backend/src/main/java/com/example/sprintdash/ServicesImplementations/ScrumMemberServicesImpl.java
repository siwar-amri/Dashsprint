package com.example.sprintdash.ServicesImplementations;

import com.example.sprintdash.Models.ScrumMember;
import com.example.sprintdash.Repositories.ScrumMemberRepo;
import com.example.sprintdash.Services.ScrumMemberServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ScrumMemberServicesImpl implements ScrumMemberServices {
    @Autowired
    ScrumMemberRepo scrumMemberRepo;
    @Override
    public List<ScrumMember> getAllScrumMembers() {
        return scrumMemberRepo.findAll();
    }

    public Optional<ScrumMember> getScrumMemberByEmail(String email) {
        return scrumMemberRepo.findByEmail(email);
    }

    @Override
    public void calculateMemberStoryPoints() {

    }
}
