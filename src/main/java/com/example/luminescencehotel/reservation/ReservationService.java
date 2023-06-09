package com.example.luminescencehotel.reservation;

import com.example.luminescencehotel.reservation.request.GetReservationRequest;
import com.example.luminescencehotel.reservation.request.MakeReservationRequest;
import com.example.luminescencehotel.reservation.response.*;
import com.example.luminescencehotel.room.RoomRepository;
import com.example.luminescencehotel.room.RoomType;
import com.example.luminescencehotel.reservation.request.SetCheckedInRequest;
import com.example.luminescencehotel.reservation.request.SetCheckedOutRequest;
import com.example.luminescencehotel.reservation.response.AllReservationsResponse;
import com.example.luminescencehotel.reservation.response.CheckInTodayResponse;
import com.example.luminescencehotel.reservation.response.PeopleCountResponse;
import com.example.luminescencehotel.reservation.response.RoomCountResponse;
import com.example.luminescencehotel.room.RoomRepository;
import com.example.luminescencehotel.room.RoomType;
import com.example.luminescencehotel.room.request.IdRequest;
import com.example.luminescencehotel.room.request.PriceRequest;
import com.example.luminescencehotel.user.User;
import com.example.luminescencehotel.room.Room;
import com.example.luminescencehotel.user.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;

    // make a reservation
    public void makeReservation(MakeReservationRequest makeReservationRequest) {
        Reservation reservation = new Reservation();
        reservation.setStart_date(LocalDate.parse(makeReservationRequest.getStartDate()));
        reservation.setEnd_date(LocalDate.parse(makeReservationRequest.getEndDate()));
        reservation.setTotal_price(makeReservationRequest.getTotalPrice());
        // Find the user by nif and set it on the reservation
        User user = userRepository.findByNif(makeReservationRequest.getNif()).get(0);
        reservation.setUser(user);
        // Find the room by roomId and set it on the reservation
        Room room = roomRepository.findById(makeReservationRequest.getRoomId()).orElseThrow(() -> new RuntimeException("Room not found"));
        reservation.setRoom(room);

        reservationRepository.save(reservation);
    }

    // get all reservations
    public List<AllReservationsResponse> getAllReservations() {
        List<Reservation> reservations = reservationRepository.findAllOrderByIDDesc();
        List<AllReservationsResponse> allReservations = new ArrayList<>();
        for (Reservation reservation : reservations) {
            AllReservationsResponse allReservationsResponse = new AllReservationsResponse();
            allReservationsResponse.setReservation_id(reservation.getReservation_id());
            allReservationsResponse.setName(reservation.getUser().getName());
            allReservationsResponse.setCustomer_id(Long.parseLong(reservation.getUser().getNif()));
            allReservationsResponse.setRoom_number(reservation.getRoom().getRoom_id());
            allReservationsResponse.setStart_date(reservation.getStart_date().toString());
            allReservationsResponse.setEnd_date(reservation.getEnd_date().toString());
            allReservations.add(allReservationsResponse);
        }
        return allReservations;
    }


    // count the number of reservations that took place today
    public Long countReservationsToday() {
    	return reservationRepository.countReservationsToday();
    }

    // count checkins for today
    public Long countCheckinsToday() {
    	return reservationRepository.countCheckInsToday();
    }

    // count checkouts for today
    public Long countCheckoutsToday() {
    	return reservationRepository.countCheckOutsToday();
    }

    // get name, nif and room number of today's check-ins
    public List<CheckInTodayResponse> getCheckInsToday() {
        List<CheckInTodayResponse> checkInsToday = new ArrayList<>();
        List<Object[]> checkInsTodayObjects = reservationRepository.getCheckInsToday();

        for (Object[] checkInTodayObject : checkInsTodayObjects) {
            CheckInTodayResponse checkInTodayResponse = new CheckInTodayResponse();
            checkInTodayResponse.setReservation_id((Long) checkInTodayObject[0]);
            checkInTodayResponse.setName((String) checkInTodayObject[1]);
            checkInTodayResponse.setNif((String) checkInTodayObject[2]);
            checkInTodayResponse.setRoom_id((Long) checkInTodayObject[3]);
            checkInTodayResponse.setChecked_in((Boolean) checkInTodayObject[4]);
            checkInTodayResponse.setChecked_out((Boolean) checkInTodayObject[5]);
            checkInsToday.add(checkInTodayResponse);
        }

        return checkInsToday;
    }

    // get name, nif and room number of today's check-outs
    public List<CheckInTodayResponse> getCheckOutsToday() {
        List<CheckInTodayResponse> checkOutsToday = new ArrayList<>();
        //        TODO: Update getCheckIns e Outs para a query devolvelos
        List<Object[]> checkOutsTodayObjects = reservationRepository.getCheckOutsToday();

        for (Object[] checkOutsTodayObject : checkOutsTodayObjects) {
            CheckInTodayResponse checkOutsTodayResponse = new CheckInTodayResponse();
            checkOutsTodayResponse.setReservation_id((Long) checkOutsTodayObject[0]);
            checkOutsTodayResponse.setName((String) checkOutsTodayObject[1]);
            checkOutsTodayResponse.setNif((String) checkOutsTodayObject[2]);
            checkOutsTodayResponse.setRoom_id((Long) checkOutsTodayObject[3]);
            checkOutsTodayResponse.setChecked_in((Boolean) checkOutsTodayObject[4]);
            checkOutsTodayResponse.setChecked_out((Boolean) checkOutsTodayObject[5]);
            checkOutsToday.add(checkOutsTodayResponse);
        }

        return checkOutsToday;
    }

    public List<RoomCountResponse> countReservationsByRoom() {
        List<RoomCountResponse> roomCounts = new ArrayList<RoomCountResponse>();
        List<Object[]> roomCountsObj = reservationRepository.countReservationsByRoom();

        for (Object[] obj : roomCountsObj) {
            RoomCountResponse rcr = new RoomCountResponse((Long) obj[0], (Long) obj[1]);
            roomCounts.add(rcr);
        }
        return roomCounts;
    }

    public List<PeopleCountResponse> countReservationsByPeople() {
        List<PeopleCountResponse> peopleCounts = new ArrayList<PeopleCountResponse>();
        List<Object[]> peopleCountsObj = reservationRepository.countReservationsByPeople();

        for (Object[] obj : peopleCountsObj) {
            PeopleCountResponse pcr = new PeopleCountResponse((String) obj[0], (Long) obj[1]);
            peopleCounts.add(pcr);
        }
        return peopleCounts;
    }

    public List<RevenueResponse> getMonthlyRevenue() {
        List<RevenueResponse> monthlyRevenueList = new ArrayList<>();
        List<Object[]> monthlyRevenueData = reservationRepository.getMonthlyRevenue();

        for (Object[] data : monthlyRevenueData) {
            Integer month = Integer.parseInt(data[0].toString());
            Double revenue = (Double) data[1];
            RevenueResponse revenueResponse = new RevenueResponse();
            revenueResponse.setMonth(month);
            revenueResponse.setRevenue(revenue);
            monthlyRevenueList.add(revenueResponse);
        }


        return monthlyRevenueList;
    }

    // get reservation by id
    public Reservation getReservationById(Long id, String nif) {
        if (id == null) {
            return null;
        }
        if (nif == null) {
            return null;
        }
        Optional<Reservation> reservationOptional = reservationRepository.findById(id);
        if (reservationOptional.isPresent()) {
            Reservation reservation = reservationOptional.get();
            if (reservation.getUser().getNif().equals(nif)) {
                return reservation;
            }
        }
        return null;
    }

    // add comment to reservation
    public int addCommentToReservation(Long id, String comment, Integer stars) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(id);
        if (reservationOptional.isPresent()) {
            Reservation reservation = reservationOptional.get();
            reservation.setComment(comment);
            reservation.setStars(stars);
            reservationRepository.save(reservation);
            return 1;
        } else {
            return 0;
        }
    }

    public Map<RoomType, List<CommentResponse>> getCommentsForMostReservedRooms() {
        Map<RoomType, List<CommentResponse>> commentsMap = new HashMap<>();

        // Find the most reserved PREMIUM_SUITE
        List<Reservation> premiumSuiteReservations = reservationRepository.findMostReservedRoomsByType(RoomType.PREMIUM_SUITE);
        List<Reservation> recentPremiumSuiteReservations = findRecentReservations(premiumSuiteReservations, 3);
        List<CommentResponse> premiumSuiteComments = getCommentsList(recentPremiumSuiteReservations);
        commentsMap.put(RoomType.PREMIUM_SUITE, premiumSuiteComments);

        // Find the most reserved SUITE
        List<Reservation> suiteReservations = reservationRepository.findMostReservedRoomsByType(RoomType.SUITE);
        List<Reservation> recentSuiteReservations = findRecentReservations(suiteReservations, 3);
        List<CommentResponse> suiteComments = getCommentsList(recentSuiteReservations);
        commentsMap.put(RoomType.SUITE, suiteComments);

        // Find the most reserved FAMILY
        List<Reservation> familyReservations = reservationRepository.findMostReservedRoomsByType(RoomType.FAMILY);
        List<Reservation> recentFamilyReservations = findRecentReservations(familyReservations, 3);
        List<CommentResponse> familyComments = getCommentsList(recentFamilyReservations);
        commentsMap.put(RoomType.FAMILY, familyComments);

        return commentsMap;
    }

    private List<CommentResponse> getCommentsList(List<Reservation> reservations) {
        List<CommentResponse> comments = new ArrayList<>();
        for (Reservation reservation : reservations) {
            if (reservation.getComment() != null) {
                CommentResponse commentInfo = new CommentResponse(reservation.getComment(), reservation.getStars());
                comments.add(commentInfo);
            }
        }
        return comments;
    }


    private List<Reservation> findRecentReservations(List<Reservation> reservations, int limit) {
        List<Reservation> recentReservations = new ArrayList<>();
        reservations.sort(Comparator.comparing(Reservation::getEnd_date).reversed());

        int count = 0;
        for (Reservation reservation : reservations) {
            if (count >= limit) {
                break;
            }
            if (reservation.getComment() != null) {
                recentReservations.add(reservation);
                count++;
            }
        }

        return recentReservations;
    }


    public Map<String, String> setCheckIn(SetCheckedInRequest req) {
        Map<String, String> response = new HashMap<>();
        try {
            Reservation r = getReservationById(req.getReservation_id(), req.getNif());
            r.setChecked_in(req.getFlag());
            reservationRepository.save(r);
            response.put("status", "ok");
            response.put("message", "Reservation updated successfully");
        } catch (Exception e) {
            response.put("status", "not ok");
            response.put("message", "There was an error, try again!");
        }
        return response;
    }

    public Map<String, String> setCheckOut(SetCheckedOutRequest req) {
        Map<String, String> response = new HashMap<>();
        try {
            Reservation r = getReservationById(req.getReservation_id(), req.getNif());
            r.setChecked_out(req.getFlag());
            reservationRepository.save(r);
            response.put("status", "ok");
            response.put("message", "Reservation updated successfully");
        } catch (Exception e) {
            response.put("status", "not ok");
            response.put("message", "There was an error, try again!");
        }
        return response;
    }

    // delete multiple reservations by reservation_id
    public void deleteMultipleReservations(List<String> reservationIds) {
        List<Reservation> reservations = reservationRepository.findAllById(reservationIds.stream().map(Long::parseLong).collect(Collectors.toList()));
        reservationRepository.deleteAll(reservations);

    }
}
