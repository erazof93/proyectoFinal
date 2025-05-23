import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./pages/Home";
import { Registro } from "./pages/Registro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
