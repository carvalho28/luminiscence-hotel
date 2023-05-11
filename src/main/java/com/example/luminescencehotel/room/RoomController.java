package com.example.luminescencehotel.room;

import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping(path = "api/v1/room")
public class RoomController {

    private final RoomService roomService;

    @GetMapping
    public ResponseEntity<List<Room>> getRooms() {
        return ResponseEntity.ok(roomService.getRooms());
    }

    @PostMapping(path = "/available")
    public ResponseEntity<List<Room>> getAvailableRooms(AvailableRoomsRequest availableRoomsRequest) {
        return ResponseEntity.ok(roomService.findAvailableRooms(availableRoomsRequest));
    }
}
