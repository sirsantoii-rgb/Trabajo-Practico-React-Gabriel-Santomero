import React, { useState } from "react";
import "./HeaderMenssage.css";
import { GiHeartBeats } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";
import HeaderStatsMenu from "./HeaderStatsMenu/HeaderStatsMenu";
import { useNavigate, useParams } from "react-router-dom";  
import { getContactById } from "../../../service/contactService"; 
import { SlArrowLeft } from "react-icons/sl";



const HeaderMenssage = () => {
  const [is_open, setIsOpen] = useState(false);
  const { id_contacto } = useParams();
  const navigate = useNavigate();

  const contact = getContactById(id_contacto); 
  const BackButton = () => {
  
  navigate("/");
}
  const toggleStatsMenu = () => {
    setIsOpen(!is_open);
  };

  if (!contact) {
    return (
      <div >
        <h2>Selecciona un contacto</h2>
      </div>
    );
  }

  return (
    <div className="header__user__menssage">
      <div className="header__user">
        <div className="header__user__container1">
          <button className="header__user__back" onClick={BackButton}><SlArrowLeft /></button>
          <img
            className="header__user__image"
            src={contact.profile_img}
            alt={contact.name}
          />
          <div className="header__user__info_container">
            <h1 className="header__user__name">{contact.name}</h1>
            <div className="header__user__info">
              <span className="header__level display__none">{contact.level}</span>
              <span className="header__clase display__none">{contact.clase}</span>
              <span className="header__juego display__none">{contact.game}</span>
              <span
                className={`header__estatus ${
                  contact.isOnline ? "header_online" : "header_offline"
                }`}
              >
                {contact.isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        <div className="header__buttons">
          <button className="header__stats-button display__none" onClick={toggleStatsMenu}>
            <GiHeartBeats size={30} />
          </button>
          <button className="header__stats-button" onClick={toggleStatsMenu}>
            <VscGear size={30} />
          </button>
        </div>
      </div>

      {is_open && <HeaderStatsMenu />}
    </div>
  );
};

export default HeaderMenssage;