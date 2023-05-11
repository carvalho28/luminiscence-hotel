package com.example.luminescencehotel.room;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "rooms")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long room_id;
    @Enumerated(EnumType.STRING)
    private RoomType room_type;
    private Float price;
//    private Boolean tv;
//    private Boolean animal_friendly;
}
