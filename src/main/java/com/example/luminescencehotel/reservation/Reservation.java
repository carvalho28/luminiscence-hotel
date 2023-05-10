package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.room.Room;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservation_id;
    private Long userId;
    private LocalDate start_date;
    private LocalDate end_date;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "room_id")
    private Room room;
}