package com.example.luminescencehotel.user;

import com.example.luminescencehotel.user.request.NifRequest;
import com.example.luminescencehotel.user.request.RoleRequest;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    private final static String USER_NOT_FOUND_MSG =
            "user with username %s not found";

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(USER_NOT_FOUND_MSG, username)));
    }

    public List<User> findByRole(RoleRequest roleRequest) {
        UserRole role = UserRole.valueOf(roleRequest.getRole());
        return userRepository.findByRole(role);
    }

    public List<User> findByNif(NifRequest nifRequest) {
        return userRepository.findByNif(nifRequest.getNif());
    }
}
