package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.response.CheckInTodayResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.stream.Collectors;

public interface ReservationRepository extends JpaRepository<Reservation, Long>{

    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    Long countReservationsToday();

    // count check-ins today
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    Long countCheckInsToday();

    // count check-outs today
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.end_date = CURRENT_DATE")
    Long countCheckOutsToday();

    // get name, nif and room number of today's check-ins
    @Query("SELECT r.reservation_id, r.user.name, r.user.nif, r.room.room_id FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    List<Object[]> getCheckInsToday();

    // get name, nif and room number of today's check-outs
    @Query("SELECT r.reservation_id, r.user.name, r.user.nif, r.room.room_id FROM Reservation r WHERE r.end_date = CURRENT_DATE")
    List<Object[]> getCheckOutsToday();
}
