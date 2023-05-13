package com.example.luminescencehotel.reservation.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class RoomCountResponse {
    Long room_id;
    Long room_count;
}
