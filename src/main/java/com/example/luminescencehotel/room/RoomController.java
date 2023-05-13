package com.example.luminescencehotel.room;

import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<List<Room>> getAvailableRooms(@RequestBody AvailableRoomsRequest availableRoomsRequest) {
        return ResponseEntity.ok(roomService.findAvailableRooms(availableRoomsRequest));
    }

    // count the number of rooms
    @GetMapping(path = "/count")
    public ResponseEntity<Map<String, Object>> countRooms() {
        Map<String, Object> response = new HashMap<>();
        response.put("count", roomService.countRooms());
        return ResponseEntity.ok(response);
    }
}
