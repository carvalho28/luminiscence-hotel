import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

export function AppRoutes() {

  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
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