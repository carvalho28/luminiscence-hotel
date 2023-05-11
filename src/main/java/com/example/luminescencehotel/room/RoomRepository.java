package com.example.luminescencehotel.room;

import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {

}
