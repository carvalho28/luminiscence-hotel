package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.room.Room;
import com.example.luminescencehotel.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    private User user;
    private LocalDate start_date;
    private LocalDate end_date;
    // already checked in and checked out
    private boolean checked_in;
    private boolean checked_out;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "room_id", name = "room_id")
    private Room room;
}