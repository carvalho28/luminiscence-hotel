package com.example.luminescencehotel.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReservationRepository extends JpaRepository<Reservation, Long>{

    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    Long countReservationsToday();
}
