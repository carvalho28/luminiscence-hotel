package com.example.luminescencehotel.reservation.response;

public class CommentResponse {
    private String comment;
    private Integer stars;

    public CommentResponse(String comment, Integer stars) {
        this.comment = comment;
        this.stars = stars;
    }

    public String getComment() {
        return comment;
    }

    public Integer getStars() {
        return stars;
    }
}
