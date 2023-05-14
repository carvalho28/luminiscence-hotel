package com.example.luminescencehotel.user;

import com.example.luminescencehotel.user.request.NameRequest;
import com.example.luminescencehotel.user.request.NewCustomerRequest;

import com.example.luminescencehotel.user.request.NifRequest;
import com.example.luminescencehotel.user.request.RoleRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    public ResponseEntity<List<User>> findByRole(@RequestBody RoleRequest roleRequest){
        return ResponseEntity.ok(userService.findByRole(roleRequest));
    }

    @PostMapping("/nif")
    public ResponseEntity<List<User>> findByNif(@RequestBody NifRequest nif){
        return ResponseEntity.ok(userService.findByNif(nif));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Map<String, String>> deleteUser(@RequestBody NifRequest nif) {
        return ResponseEntity.ok(userService.deleteUser(nif));
    }
//    Return da lista vazia?
//    @DeleteMapping("/delete")
//    public ResponseEntity<Boolean> deleteUser(@RequestBody NifRequest nif) {
//        return ResponseEntity.ok(userService.deleteUser(nif));
//    }

    @PostMapping("/update")
    public ResponseEntity<Map<String, String>> updateUser(@RequestBody NifRequest nif, NameRequest nameRequest) {
        return ResponseEntity.ok(userService.updateUser(nif, nameRequest));
    }

    // create customer
    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody NewCustomerRequest newCustomerRequest) {
        return ResponseEntity.ok(userService.createUser(newCustomerRequest));
    }
}
