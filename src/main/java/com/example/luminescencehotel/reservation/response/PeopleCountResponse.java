package com.example.luminescencehotel.reservation.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class PeopleCountResponse {
    String name;
    Long person_count;
}
