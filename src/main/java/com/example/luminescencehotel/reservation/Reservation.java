package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.room.Room;
import com.example.luminescencehotel.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservation_id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "id")
    @JsonIgnoreProperties({"hibernateLazyInitializer"})
    private User user;
    private LocalDate start_date;
    private LocalDate end_date;
    private Boolean checked_in = false;
    private Boolean checked_out = false;
    private Float total_price;
    private String comment;
    private Integer stars;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(referencedColumnName = "room_id", name = "room_id")
    private Room room;
}