package com.example.luminescencehotel.reservation.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CheckInTodayResponse {
    private Long reservation_id;
    private String name;
    private String nif;
    private Long room_id;

    public CheckInTodayResponse(Object[] values) {
        this.reservation_id = (Long) values[0];
        this.name = (String) values[1];
        this.nif = (String) values[2];
        this.room_id = (Long) values[3];
    }
}
