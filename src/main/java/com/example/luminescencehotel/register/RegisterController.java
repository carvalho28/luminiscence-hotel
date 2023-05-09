package com.example.luminescencehotel.register;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    private final RegisterService registerService;

    public RegisterController(RegisterService registerService) {
        this.registerService = registerService;
    }

    public String register(@RequestBody RegisterRequest request) {
        return registerService.register(request);
    }
}
