package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.request.MakeReservationRequest;
import com.example.luminescencehotel.reservation.response.AllReservationsResponse;
import com.example.luminescencehotel.room.RoomRepository;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.room.Room;
import com.example.luminescencehotel.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    // make a reservation
    public void makeReservation(MakeReservationRequest makeReservationRequest) {
        Reservation reservation = new Reservation();
        reservation.setStart_date(LocalDate.parse(makeReservationRequest.getStartDate()));
        reservation.setEnd_date(LocalDate.parse(makeReservationRequest.getEndDate()));
        // Find the user by nif and set it on the reservation
        User user = userRepository.findByNif(makeReservationRequest.getNif()).get(0);
        reservation.setUser(user);
        // Find the room by roomId and set it on the reservation
        Room room = roomRepository.findById(makeReservationRequest.getRoomId()).orElseThrow(() -> new RuntimeException("Room not found"));
        reservation.setRoom(room);

        reservationRepository.save(reservation);
    }

    // get all reservations
    public List<AllReservationsResponse> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        List<AllReservationsResponse> allReservations = new ArrayList<>();
        for (Reservation reservation : reservations) {
            AllReservationsResponse allReservationsResponse = new AllReservationsResponse();
            allReservationsResponse.setReservation_id(reservation.getReservation_id());
            allReservationsResponse.setName(reservation.getUser().getName());
            allReservationsResponse.setCustomer_id(reservation.getUser().getId());
            allReservationsResponse.setRoom_number(reservation.getRoom().getRoom_id());
            allReservationsResponse.setStart_date(reservation.getStart_date().toString());
            allReservationsResponse.setEnd_date(reservation.getEnd_date().toString());
            allReservations.add(allReservationsResponse);
        }
        return allReservations;
    }


    // count the number of reservations that took place today
    public Long countReservationsToday() {
    	return reservationRepository.countReservationsToday();
    }
}
