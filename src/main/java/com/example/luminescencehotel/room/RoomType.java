package com.example.luminescencehotel.room;

import lombok.Getter;
import lombok.Setter;

@Getter
public enum RoomType {
    // uma cama
    SINGLE,
    // duas camas
    TWIN,
    // cama de casal
    DOUBLE,
    // bigger room, normally with a couch
    SUITE,
    // bigger room, normally with a couch and a balcony
    PREMIUM_SUITE,
    // famil
    FAMILY,
}
