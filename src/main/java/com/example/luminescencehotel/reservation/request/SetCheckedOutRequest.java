package com.example.luminescencehotel.reservation.request;

import lombok.Getter;

@Getter
public class SetCheckedOutRequest {
    private Long reservation_id;
    private String nif;
    private Boolean flag;
}
