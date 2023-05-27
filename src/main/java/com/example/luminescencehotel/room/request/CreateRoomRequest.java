package com.example.luminescencehotel.room.request;

import com.example.luminescencehotel.room.RoomType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateRoomRequest {
    RoomType type;
    Float price;
}
