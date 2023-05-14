package com.example.luminescencehotel.room;

import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import com.example.luminescencehotel.room.request.IdRequest;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    @Query("SELECT r FROM Room r WHERE NOT EXISTS (SELECT res FROM Reservation res WHERE res.room = r AND res.start_date <= :endDate AND res.end_date >= :startDate)")
    List<Room> findAvailableRooms(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

//    public List<Room> findRoomById(IdRequest idRequest);
//
//    public Boolean deleteRoom(IdRequest idRequest);
}
