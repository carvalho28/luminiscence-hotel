package com.example.luminescencehotel.room;

import com.example.luminescencehotel.reservation.Reservation;
import com.example.luminescencehotel.room.request.*;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
import com.example.luminescencehotel.user.request.NameRequest;
import com.example.luminescencehotel.user.request.NifRequest;
import com.example.luminescencehotel.user.request.UserUpdateRequest;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import jakarta.servlet.ServletOutputStream;
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
        id.add(Long.parseLong(idRequest.getId()));
        return roomRepository.findAllById(id);
    }

    public Map<String, String> deleteRoom(IdRequest idRequest) {
        Map<String, String> response = new HashMap<>();
        try {
            roomRepository.delete(findRoomById(idRequest).get(0));
        } catch (Exception e) {
            response.put("status", "not ok");
            response.put("message", "There was an error, try again!");
            return response;
        }
        response.put("status", "ok");
        response.put("message", "Room deleted successfully");
        return response;
    }

    public Map<String, String> updateRoom(RoomUpdateRequest roomUpdateRequest) {
        Map<String, String> response = new HashMap<>();
        System.out.println(roomUpdateRequest.getId());
        System.out.println(roomUpdateRequest.getType());
        System.out.println(roomUpdateRequest.getPrice());
        if(roomUpdateRequest.getId() !=null ) {
            try {
                Room r = roomRepository.findById(Long.parseLong(roomUpdateRequest.getId())).get();
                System.out.println(r.getRoom_id());
                r.setRoom_type(roomUpdateRequest.getType());
                System.out.println(r.getRoom_type());
                r.setPrice(Float.parseFloat(roomUpdateRequest.getPrice()));
                System.out.println(r.getPrice());
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

    public Room createRoom(CreateRoomRequest createRoomRequest) {
        Room r = new Room();
        System.out.println(createRoomRequest);
        r.setRoom_type(createRoomRequest.getType());
        r.setPrice(Float.parseFloat(createRoomRequest.getPrice()));
        System.out.println(r.getRoom_type());
        System.out.println(r.getPrice());
        return roomRepository.save(r);
    }

    // count the number of rooms
    public Long countRooms() {
    	return roomRepository.count();
    }
}
