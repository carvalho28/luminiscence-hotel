package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.request.MakeReservationRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
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
}
