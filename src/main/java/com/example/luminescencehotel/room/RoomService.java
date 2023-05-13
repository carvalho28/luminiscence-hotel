package com.example.luminescencehotel.room;

import com.example.luminescencehotel.reservation.Reservation;
import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import com.example.luminescencehotel.room.request.IdRequest;
import com.example.luminescencehotel.room.request.PriceRequest;
import com.example.luminescencehotel.room.request.TypeRequest;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
import com.example.luminescencehotel.user.request.NameRequest;
import com.example.luminescencehotel.user.request.NifRequest;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Array;
import java.time.LocalDate;
import java.util.*;

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

    public List<Room> findRoomById(IdRequest idRequest) {
        ArrayList<Long> id = new ArrayList<>();
        id.add(idRequest.getId());
        return roomRepository.findAllById(id);
    }

    public Map<String, String> deleteRoom(IdRequest idRequest) {
        Map<String, String> response = new HashMap<>();
        try {
            roomRepository.delete(findRoomById(idRequest).get(0));
        } catch (Exception e) {
            response.put("status", "ok");
            response.put("message", "Room deleted successfully");
            return response;
        }
        response.put("status", "not ok");
        response.put("message", "There was an error, try again!");
        return response;
    }

    public Map<String, String> updateRoom(IdRequest idRequest, RoomType roomType, PriceRequest priceRequest) {
        Map<String, String> response = new HashMap<>();
        if(findRoomById(idRequest).size() != 0) {
            try {
                Room r = findRoomById(idRequest).get(0);
                r.setRoom_type(roomType);
                r.setPrice(Float.parseFloat(priceRequest.getPrice()));
                roomRepository.save(r);
                response.put("status", "ok");
                response.put("message", "Room updated successfully");
            } catch (Exception e) {
                response.put("status", "not ok");
                response.put("message", "There was an error, try again!");
            }
        } else {
            response.put("status", "not ok");
            response.put("message", "There was an error, try again!");
        }
        return response;
    }

    // count the number of rooms
    public Long countRooms() {
    	return roomRepository.count();
    }
}
