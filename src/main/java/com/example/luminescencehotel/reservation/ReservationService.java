package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.request.MakeReservationRequest;
import com.example.luminescencehotel.room.RoomRepository;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.room.Room;
import com.example.luminescencehotel.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

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
}
