package com.example.sprintdash.Services;

import com.example.sprintdash.Models.AppUser;
import com.example.sprintdash.Repositories.AppUserRepository;
import com.example.sprintdash.Services.ConfirmationToken;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;


@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    //fields

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final static String USER_NOT_FOUND_MSG=
            "user with email %s not found ";
    private final AppUserRepository appUserRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return appUserRepository.findByEmail(email)
                .orElseThrow(()  -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG,email)));
    }

    public AppUser saveUser(AppUser user) {
        return appUserRepository.save(user);
    }

    public String signUpUser (AppUser appUser) {
        boolean userExists = appUserRepository
                .findByEmail(appUser.getEmail())
                .isPresent();
        if (userExists) {
            throw new IllegalArgumentException("email already in use");
        }
        String encodedPassword =
                bCryptPasswordEncoder.encode(appUser.getPassword());
        appUser.setPassword(encodedPassword);

        appUserRepository.save(appUser);

        String token = UUID.randomUUID().toString();
        // TODO: send confirmation token
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                appUser
        );
        confirmationTokenService.saveConfirmationToken(
                confirmationToken
        );

        //TODO : send email
        return token;
    }
        public int enableAppUser (String email) {
            return appUserRepository.enableAppUser(email);

    }
}
