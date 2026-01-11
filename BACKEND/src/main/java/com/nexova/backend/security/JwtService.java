package com.nexova.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private long jwtExpirationMs;

    @Value("${jwt.refreshExpiration}")
    private long refreshExpirationMs;

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    // ================== EXTRACT ==================

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject); // EMAIL
    }

    public String extractRole(String token) {
        return extractClaim(token, claims -> claims.get("role", String.class));
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return resolver.apply(claims);
    }

    // ================== GENERATE ==================

    public String generateAccessToken(com.nexova.backend.model.User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())              // ✅ EMAIL
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateRefreshToken(com.nexova.backend.model.User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())              // ✅ EMAIL
                .claim("role", user.getRole())

                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + refreshExpirationMs))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // ================== VALIDATE ==================

    public boolean isTokenValid(
            String token,
            org.springframework.security.core.userdetails.UserDetails userDetails
    ) {
        return extractUsername(token).equals(userDetails.getUsername())
                && extractClaim(token, Claims::getExpiration).after(new Date());
    }
}
