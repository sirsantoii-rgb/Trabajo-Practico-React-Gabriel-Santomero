import "./WindowsMessanger.css";
import ContactList from "./ContactList/ContactList";
import MenssagerList from "./MenssagerList/MenssagerList";
import PlaceHolder from "../PlaceHolder/PlaceHolder";
import { ChatWindow } from "../ChatWindow/ChatWindow";
import { Routes, Route } from "react-router-dom";
import React from "react";

const WinowsMessanger = () => {

  return (
    <div className="windows__messanger">
      
        <div className="windows__messanger__contact-list">
          <ContactList />
          <MenssagerList />
        </div>

        <div className="windows__messanger__menssage">
          
            <Routes>
              
              <Route path="/" element={<PlaceHolder />} />

              
              <Route path="/contacto/:id_contacto" element={<ChatWindow />} />
            </Routes>
          
        </div>
      
    </div>
  );
};

export default WinowsMessanger;