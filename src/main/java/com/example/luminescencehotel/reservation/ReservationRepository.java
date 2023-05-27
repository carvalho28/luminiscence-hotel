package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.response.CheckInTodayResponse;
import com.example.luminescencehotel.room.RoomType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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
    @Query("SELECT r.reservation_id, r.user.name, r.user.nif, r.room.room_id, r.checked_in, r.checked_out FROM Reservation r WHERE r.start_date = CURRENT_DATE")
    List<Object[]> getCheckInsToday();

    // get name, nif and room number of today's check-outs
    @Query("SELECT r.reservation_id, r.user.name, r.user.nif, r.room.room_id, r.checked_in, r.checked_out FROM Reservation r WHERE r.end_date = CURRENT_DATE")
    List<Object[]> getCheckOutsToday();

    @Query("SELECT r.room.room_id, count(r.room.room_id) FROM Reservation r GROUP BY r.room.room_id")
    List<Object[]> countReservationsByRoom();

    @Query("SELECT r.user.name, count(r.user.name) FROM Reservation r GROUP BY r.user.name")
    List<Object[]> countReservationsByPeople();

    @Query("SELECT r FROM Reservation r WHERE r.room.room_type = :roomType ORDER BY r.reservation_id DESC")
    List<Reservation> findMostReservedRoomsByType(@Param("roomType") RoomType roomType);

    @Query("SELECT r FROM Reservation r ORDER BY r.reservation_id DESC")
    List<Reservation> findAllOrderByIDDesc();

    // get monthly revenue for the current year, separated by month
    @Query("SELECT MONTH(r.start_date), SUM(r.total_price) FROM Reservation r WHERE YEAR(r.start_date) = YEAR(CURRENT_DATE) GROUP BY MONTH(r.start_date)")
    List<Object[]> getMonthlyRevenue();
}
