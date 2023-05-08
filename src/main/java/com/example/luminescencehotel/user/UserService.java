package com.example.luminescencehotel.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

//    new User(
//                        1L,
//                                "John Doe",
//                                "johndoe",
//                                "password",
//                                "salt",
//                                "admin",
//                        LocalDate.now()
//                )
}
