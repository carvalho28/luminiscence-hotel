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
    private Integer singleBeds;
    private Integer twinBeds;
    private Float price;
    private Boolean tv;
    private Boolean animalFriendly;
}
