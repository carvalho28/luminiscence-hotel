package com.example.luminescencehotel.room;

import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.user.UserRole;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;

    public List<Room> getRooms() {
        return roomRepository.findAll();
    }

}
