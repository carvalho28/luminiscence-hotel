package com.example.luminescencehotel.room;

import com.example.luminescencehotel.room.request.AvailableRoomsRequest;
import com.example.luminescencehotel.room.request.IdRequest;
import com.example.luminescencehotel.room.request.PriceRequest;
import com.example.luminescencehotel.room.request.TypeRequest;
import com.example.luminescencehotel.user.UserService;
import com.example.luminescencehotel.user.request.NameRequest;
import com.example.luminescencehotel.user.request.NifRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<List<Room>> getAvailableRooms(@RequestBody AvailableRoomsRequest availableRoomsRequest) {
        return ResponseEntity.ok(roomService.findAvailableRooms(availableRoomsRequest));
    }

    @PostMapping(path = "/room")
    public ResponseEntity<List<Room>> getRoomFromId(@RequestBody IdRequest idRequest) {
        return ResponseEntity.ok(roomService.findRoomById(idRequest));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Boolean> deleteRoom(@RequestBody IdRequest idRequest) {
        return ResponseEntity.ok(roomService.deleteRoom(idRequest));
    }

//    @PostMapping("/update")
//    public ResponseEntity<Boolean> updateRoom(@RequestBody IdRequest idRequest, TypeRequest typeRequest, PriceRequest priceRequest) {
//        return ResponseEntity.ok(roomService.updateRoom(idRequest, typeRequest, priceRequest));
//    }
}
