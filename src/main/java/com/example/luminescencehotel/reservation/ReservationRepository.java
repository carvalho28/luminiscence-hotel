package com.example.luminescencehotel.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReservationRepository extends JpaRepository<Reservation, Long>{

    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    Long countReservationsToday();

    // count check-ins today
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    Long countCheckInsToday();

    // count check-outs today
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.end_date = CURRENT_DATE")
    Long countCheckOutsToday();
}
