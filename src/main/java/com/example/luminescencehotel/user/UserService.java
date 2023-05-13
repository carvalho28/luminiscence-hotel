package com.example.luminescencehotel.user;

import com.example.luminescencehotel.user.request.NameRequest;
import com.example.luminescencehotel.user.request.NifRequest;
import com.example.luminescencehotel.user.request.RoleRequest;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Boolean deleteUser(NifRequest nifRequest) {
        try {
            userRepository.delete(userRepository.findByNif(nifRequest.toString()).get(0));
        } catch (Exception e) {
            return false;
        }
        return true;
    }

//    public Boolean updateUser(NifRequest nifRequest, NameRequest nameRequest) {
//        if(userRepository.findByNif(nifRequest.toString()).size() != 0) {
//            try {
//                deleteUser(nifRequest);
//                //            Add user to db?
//                return true;
//            } catch (Exception e) {
//                return false;
//            }
//        }
//        return false;
//    }
}
