package com.example.luminescencehotel.user;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/v1/user")
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/role")
    public ResponseEntity<List<User>> findByRole(@RequestBody Map<String, String> requestBody) {
        String role = requestBody.get("role");
        UserRole userRole = UserRole.valueOf(role);
        return ResponseEntity.ok(userService.findByRole(userRole));
    }
}
