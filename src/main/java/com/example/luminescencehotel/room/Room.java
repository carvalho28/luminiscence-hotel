package com.example.luminescencehotel.room;

import com.example.luminescencehotel.reservation.Reservation;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long room_id;
    @Enumerated(EnumType.STRING)
    private RoomType room_type;
    private Float price;

    @JsonIgnore
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private List<Reservation> reservations;

//    private Boolean tv;
//    private Boolean animal_friendly;
}
