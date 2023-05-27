package com.example.luminescencehotel.room.request;

import com.example.luminescencehotel.room.RoomType;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CreateRoomRequest {
    RoomType type;
    String price;
}
