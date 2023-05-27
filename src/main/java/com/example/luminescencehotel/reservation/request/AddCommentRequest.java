package com.example.luminescencehotel.reservation.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddCommentRequest {
    Long id;
    String comment;
}
