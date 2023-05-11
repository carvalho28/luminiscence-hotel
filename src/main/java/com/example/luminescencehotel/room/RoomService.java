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


    @Transactional(readOnly = true)
    public List<Room> findAvailableRooms(AvailableRoomsRequest availableRoomsRequest) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Room> query = cb.createQuery(Room.class);
        Root<Room> roomRoot = query.from(Room.class);
        Join<Room, Reservation> reservationJoin = roomRoot.join("reservations", JoinType.LEFT);

        Predicate overlapping = cb.and(
                cb.lessThan(reservationJoin.get("end_date"), availableRoomsRequest.getStartDate()),
                cb.greaterThan(reservationJoin.get("start_date"), availableRoomsRequest.getEndDate())
        );

        Predicate noReservations = cb.isNull(reservationJoin.get("reservation_id"));

        query.select(roomRoot)
                .where(cb.or(overlapping, noReservations));

        TypedQuery<Room> typedQuery = entityManager.createQuery(query);
        return typedQuery.getResultList();
    }
}
