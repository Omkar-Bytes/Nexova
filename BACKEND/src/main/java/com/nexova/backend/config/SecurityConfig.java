package com.nexova.backend.config;

import com.nexova.backend.security.JwtAuthenticationFilter;
import com.nexova.backend.security.CustomUserDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final CustomUserDetailsService userDetailsService;

    public SecurityConfig(
            JwtAuthenticationFilter jwtAuthFilter,
            CustomUserDetailsService userDetailsService
    ) {
        this.jwtAuthFilter = jwtAuthFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())

            .cors(cors -> cors.configurationSource(request -> {
                CorsConfiguration cfg = new CorsConfiguration();
                cfg.setAllowedOrigins(List.of("http://localhost:5173"));
                cfg.setAllowedMethods(List.of("GET","POST","PUT","DELETE","PATCH","OPTIONS"));
                cfg.setAllowedHeaders(List.of("*"));
                cfg.setAllowCredentials(true);
                return cfg;
            }))

            .sessionManagement(sm ->
                sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )

            .authorizeHttpRequests(auth -> auth

                // ---------- PUBLIC ----------
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .requestMatchers("/api/product-images/**").permitAll()
                .requestMatchers("/api/newsletter/**").permitAll()


                // ---------- ORDERS ----------
                .requestMatchers("/api/orders/**").hasAnyAuthority("USER","SELLER","ADMIN")

                // ---------- SELLER ----------
                .requestMatchers("/api/seller/**").hasAuthority("SELLER")
                .requestMatchers(HttpMethod.POST, "/api/products/full").hasAuthority("SELLER")

                // ---------- USER/CART ----------
                .requestMatchers("/api/cart/**", "/api/user/**").hasAnyAuthority("USER","SELLER","ADMIN")

                // ---------- ADMIN ----------
                .requestMatchers("/api/admin/**").hasAuthority("ADMIN")
                .requestMatchers("/api/admin/newsletter/**").hasRole("ADMIN")


                // ---------- EVERYTHING ELSE ----------
                .anyRequest().authenticated()
            )

            .authenticationProvider(authenticationProvider())
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config
    ) throws Exception {
        return config.getAuthenticationManager();
    }
}