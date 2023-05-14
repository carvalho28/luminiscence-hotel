package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.request.MakeReservationRequest;
import com.example.luminescencehotel.reservation.response.*;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/v1/reservation")
public class ReservationController {

    private final ReservationService reservationService;

    // make a reservation
    @PostMapping(path = "/make")
    public ResponseEntity<Map<String, Object>> makeReservation(@RequestBody MakeReservationRequest makeReservationRequest) {
        reservationService.makeReservation(makeReservationRequest);
        Map<String, Object> response = new HashMap<>();
        response.put("status", "ok");
        response.put("message", "Reservation created successfully");
        return ResponseEntity.ok(response);
    }

    // get all reservations
    @GetMapping(path = "/all")
    public ResponseEntity<List<AllReservationsResponse>> getAllReservations() {
        return ResponseEntity.ok(reservationService.getAllReservations());
    }

    // count the number of reservations that took place today
    @GetMapping(path = "/count/today")
    public ResponseEntity<Map<String, Object>> countReservationsToday() {
        Map<String, Object> response = new HashMap<>();
        response.put("count", reservationService.countReservationsToday());
        return ResponseEntity.ok(response);
    }

    // check-ins today
    @GetMapping(path = "/checkin/today")
    public ResponseEntity<Map<String, Object>> countCheckInsToday() {
        Map<String, Object> response = new HashMap<>();
        response.put("count", reservationService.countCheckinsToday());
        return ResponseEntity.ok(response);
    }

    // check-outs today
    @GetMapping(path = "/checkout/today")
    public ResponseEntity<Map<String, Object>> countCheckOutsToday() {
        Map<String, Object> response = new HashMap<>();
        response.put("count", reservationService.countCheckoutsToday());
        return ResponseEntity.ok(response);
    }

    // check in info today
    @GetMapping(path = "/checkin/info/today")
    public ResponseEntity<List<CheckInTodayResponse>> getCheckInInfoToday() {
        return ResponseEntity.ok(reservationService.getCheckInsToday());
    }

    // check out info today
    @GetMapping(path = "/checkout/info/today")
    public ResponseEntity<List<CheckInTodayResponse>> getCheckOutInfoToday() {
        return ResponseEntity.ok(reservationService.getCheckOutsToday());
    }

    @GetMapping(path = "/count/rooms")
    public ResponseEntity<List<RoomCountResponse>> countReservationsByRoom() {
        return ResponseEntity.ok(reservationService.countReservationsByRoom());
    }

    @GetMapping(path = "/count/people")
    public ResponseEntity<List<PeopleCountResponse>> countReservationsByPeople() {
        return ResponseEntity.ok(reservationService.countReservationsByPeople());
    }

    // delete reservations by id
//    @DeleteMapping(path = "/delete")
//    public ResponseEntity<Map<String, Object>> deleteReservationById(@RequestBody List<String> reservation_id) {
//        reservationService.deleteMultipleReservations(reservation_id);
//        Map<String, Object> response = new HashMap<>();
//        response.put("status", "ok");
//        response.put("message", "Reservation deleted successfully");
//        return ResponseEntity.ok(response);
//
//    }

    @GetMapping(path = "/count/money")
    public ResponseEntity<List<RevenueResponse>> monthRevenue() {
        Map<String, Object> response = new HashMap<>();
        response.put("revenue", reservationService.getMonthlyRevenue());
        return ResponseEntity.ok(reservationService.getMonthlyRevenue());
    }
}
