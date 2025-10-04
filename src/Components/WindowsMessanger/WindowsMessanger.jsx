import "./WindowsMessanger.css";
import ContactList from "./ContactList/ContactList";
import MenssagerList from "./MenssagerList/MenssagerList";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import { ChatWindow } from "../ChatWindow/ChatWindow";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const WinowsMessanger = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const isChatOpen = location.pathname.startsWith("/contacto/");

  return (
    <div className="windows__messanger">
      
      <div
        className={`windows__messanger__contact-list ${
          isMobile && isChatOpen ? "oculto" : ""
        }`}
      >
        <ContactList />
        <MenssagerList />
      </div>

      
      <div
        className={`windows__messanger__menssage ${
          isMobile && !isChatOpen ? "oculto" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<PlaceHolder />} />
          <Route path="/contacto/:id_contacto" element={<ChatWindow />} />
        </Routes>
      </div>
    </div>
  );
};

export default WinowsMessanger;