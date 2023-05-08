package com.example.luminescencehotel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class LuminescenceHotelApplication {

    public static void main(String[] args) {
        SpringApplication.run(LuminescenceHotelApplication.class, args);
    }

    @GetMapping("/")
    public String home() {
        return "Hello World!";
    }
}
