package com.example.luminescencehotel.room;

import com.example.luminescencehotel.room.request.*;
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

    @PostMapping(path = "/room")
    public ResponseEntity<List<Room>> getRoomFromId(@RequestBody IdRequest idRequest) {
        return ResponseEntity.ok(roomService.findRoomById(idRequest));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Map<String, String>> deleteRoom(@RequestBody IdRequest id) {
        return ResponseEntity.ok(roomService.deleteRoom(id));
    }

    @PutMapping("/update")
    public ResponseEntity<Map<String, String>> updateRoom(@RequestBody RoomUpdateRequest roomUpdateRequest) {
        return ResponseEntity.ok(roomService.updateRoom(roomUpdateRequest));
    }
//    @DeleteMapping("/delete")
//    public ResponseEntity<Boolean> deleteRoom(@RequestBody IdRequest idRequest) {
////        return ResponseEntity.ok(roomService.deleteRoom(idRequest));
//    }
//

//    @PostMapping(path = "/room")
//    public ResponseEntity<List<Room>> getRoomFromId(@RequestBody IdRequest idRequest) {
//        return ResponseEntity.ok(roomService.findRoomById(idRequest));
//    }
//
//    @DeleteMapping("/delete")
//    public ResponseEntity<Boolean> deleteRoom(@RequestBody IdRequest idRequest) {
//        return ResponseEntity.ok(roomService.deleteRoom(idRequest));
//    }

//    @PostMapping("/update")
//    public ResponseEntity<Boolean> updateRoom(@RequestBody IdRequest idRequest, TypeRequest typeRequest, PriceRequest priceRequest) {
////        return ResponseEntity.ok(roomService.updateRoom(idRequest, typeRequest, priceRequest));
//    }

    // count the number of rooms
    @GetMapping(path = "/count")
    public ResponseEntity<Map<String, Object>> countRooms() {
        Map<String, Object> response = new HashMap<>();
        response.put("count", roomService.countRooms());
        return ResponseEntity.ok(response);
    }

    @GetMapping(path = "/createRoom")
    public ResponseEntity<Map<String, String>> createRoom(CreateRoomRequest createRoomRequest) {
        roomService.createRoom(createRoomRequest);
        Map<String, String> response = new HashMap<>();
        response.put("status", "ok");
        response.put("message", "Reservation deleted successfully");
        return ResponseEntity.ok(response);
    }
}
