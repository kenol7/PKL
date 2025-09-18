import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KprPage from "./Pages/KprPages.jsx";
import ChatBot from "./Pages/Chatbot.jsx";
import Profile from "./Pages/Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/kpr" element={<KprPage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>
);