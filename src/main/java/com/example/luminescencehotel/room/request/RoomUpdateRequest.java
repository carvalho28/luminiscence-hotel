package com.example.luminescencehotel.room.request;

import com.example.luminescencehotel.room.RoomType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RoomUpdateRequest {
    String id;
    RoomType type;
    String price;
}
