import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import NotFound from "./NotFound";
import Statistics from "./Statistics";
import Rooms from "./Rooms";

export const serverUrl = import.meta.env.VITE_SERVER_URL;

export function AppRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
