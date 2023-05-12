package com.example.luminescencehotel.room.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class AvailableRoomsRequest {
    private String startDate;
    private String endDate;
}
