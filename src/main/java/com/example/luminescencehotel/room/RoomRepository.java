package com.example.luminescencehotel.room;

import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {


}
