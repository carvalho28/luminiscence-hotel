package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.request.GetReservationRequest;
import com.example.luminescencehotel.reservation.request.MakeReservationRequest;
import com.example.luminescencehotel.reservation.response.AllReservationsResponse;
import com.example.luminescencehotel.reservation.response.CheckInTodayResponse;
import com.example.luminescencehotel.reservation.response.PeopleCountResponse;
import com.example.luminescencehotel.reservation.response.RoomCountResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    @PostMapping (path = "/getReservation")
//    public ResponseEntity<Reservation> getReservation(@RequestBody GetReservationRequest getReservationRequest) {
//        return  ResponseEntity.ok(reservationService.getReservationById(getReservationRequest.getId(), getReservationRequest.getNif()));
//    }
    public ResponseEntity<Map<String, Object>> getReservation(@RequestBody GetReservationRequest getReservationRequest) {
        Reservation reservation = reservationService.getReservationById(getReservationRequest.getId(), getReservationRequest.getNif());
        Map<String, Object> response = new HashMap<>();
        if (reservation != null) {
            response.put("status", "ok");
            response.put("message", "Reservation found");
            response.put("reservation", reservation);
            return ResponseEntity.ok(response);
        } else {
            response.put("status", "error");
            response.put("message", "Reservation not found");
            return ResponseEntity.ok(response);
        }
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
}
