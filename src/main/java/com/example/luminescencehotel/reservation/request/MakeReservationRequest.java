package com.example.luminescencehotel.reservation.request;

import lombok.Getter;

@Getter
public class MakeReservationRequest {

    private String startDate;
    private String endDate;
    private Long roomId;
    private String nif;
}
