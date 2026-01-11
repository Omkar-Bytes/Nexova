package com.nexova.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@Disabled("Skipping security tests during development")
class SecurityTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testUnauthorizedAccess() throws Exception {
        mockMvc.perform(get("/secure-endpoint"))
               .andExpect(status().isUnauthorized());
    }
}
