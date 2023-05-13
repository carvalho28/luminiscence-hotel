package com.example.luminescencehotel.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    // get user by role
    List<User> findByRole(UserRole role);

    // get user by nif
    List<User> findByNif(String nif);

    Boolean updateUser(String nif, String name);

    Boolean deleteUser(String nif);
}
