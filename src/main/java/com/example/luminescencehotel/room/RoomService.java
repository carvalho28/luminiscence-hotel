package com.example.luminescencehotel.room;

import com.example.luminescencehotel.reservation.Reservation;
import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import com.example.luminescencehotel.room.request.IdRequest;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
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
import java.util.ArrayList;
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

    public List<Room> findRoomById(IdRequest idRequest) {
        ArrayList<Long> id = new ArrayList<>();
        id.add(idRequest.getId());
        return roomRepository.findAllById(id);
    }

    public Boolean deleteRoom(IdRequest idRequest) {
        try {
            roomRepository.delete(roomRepository.findRoomById(idRequest).get(0));
        } catch (Exception e) {
            return false;
        }
        return true;
    }

//    public Boolean updateRoom(IdRequest idRequest, TypeRequest typeRequest, PriceRequest priceRequest) {
//        if(roomRepository.findByRoomId(idRequest).size() != 0) {
//            try {
//                deleteRoom(nifRequest);
//                //            Add room to db?
//                return true;
//            } catch (Exception e) {
//                return false;
//            }
//        }
//        return false;
//    }
}
