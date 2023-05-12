package com.example.luminescencehotel.room;

import com.example.luminescencehotel.reservation.Reservation;
import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
@AllArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    @PersistenceContext
    private EntityManager entityManager;

    public List<Room> getRooms() {
        return roomRepository.findAll();
    }


    public List<Room> findAvailableRooms(AvailableRoomsRequest availableRoomsRequest) {
        LocalDate startDate = LocalDate.parse(availableRoomsRequest.getStartDate());
        LocalDate endDate = LocalDate.parse(availableRoomsRequest.getEndDate());
        return roomRepository.findAvailableRooms(startDate, endDate);
    }
}
