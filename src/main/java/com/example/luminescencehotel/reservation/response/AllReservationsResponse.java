package com.example.luminescencehotel.reservation.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AllReservationsResponse {
    private Long reservation_id;
    private String name;
    private Long customer_id;
    private Long room_number;
    private String start_date;
    private String end_date;
}
