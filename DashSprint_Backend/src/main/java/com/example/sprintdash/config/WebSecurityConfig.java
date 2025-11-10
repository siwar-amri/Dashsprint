package com.example.sprintdash.config;

import com.example.sprintdash.Services.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
@EnableMethodSecurity
public class WebSecurityConfig {
    @Autowired
    private final AppUserService appUserService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        http

                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> requests
                        .anyRequest().permitAll());
                        // Allow all requests
                //TODO: figure out the security thingy, check allowed and unallowed addresses
                /*.authorizeHttpRequests(requests -> requests
                        .requestMatchers( "/", "/static/**", "/index.html", "/login").permitAll() // Allow access  and login pages
                        .requestMatchers("/api/register/**").permitAll() // Allow all requests to /api/register for user registration
                        .requestMatchers(HttpMethod.POST, "/api/users/login", "/api/users/{username}", "/api/users/logout").authenticated()
                        //.requestMatchers(HttpMethod.GET, "/api/customers", "/api/storages").authenticated()
                        //.requestMatchers(HttpMethod.PUT, "/api/customers/{id}", "/api/storages/{id}").authenticated()
                        //.requestMatchers(HttpMethod.DELETE, "/api/users/{id}", "/api/storages/{id}", "/api/customers/{id}").authenticated()
                        .anyRequest().denyAll())*/

                /*.formLogin(form -> form
                        .loginPage("/api/register") // Custom login page
                        .defaultSuccessUrl("/", true) // Redirect to home page after successful login
                        .permitAll())
                .formLogin(form -> form
                        .loginPage("/api/login") // Custom login page
                        .defaultSuccessUrl("/", true) // Redirect to home page after successful login
                        .permitAll()) // Allow access to the login page for everyone
                .logout(logout -> logout
                        .logoutUrl("/logout") // Custom logout URL
                        .logoutSuccessUrl("/login?logout") // Redirect to login page after successful logout
                        .permitAll()); // Allow access to log out functionality for everyone */

        return http.build();


    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(bCryptPasswordEncoder);
        provider.setUserDetailsService(appUserService);
        return provider;
    }
}
