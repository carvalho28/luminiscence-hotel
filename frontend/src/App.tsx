import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Statistics from "./Statistics";
import Reservation from "./Reservation";
import Bookings from "./Bookings";
import Reviews from "./Reviews";
import MakeReservation from "./MakeReservation";
import Rooms from "./Rooms";
import Users from "./Users";

export const serverUrl = import.meta.env.VITE_SERVER_URL;

export function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/users" element={<Users />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/make-reservation" element={<MakeReservation />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
