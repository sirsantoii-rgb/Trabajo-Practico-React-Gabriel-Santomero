import React from 'react'
import './PlaceHolder.css'
import { GiMagicGate } from "react-icons/gi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { GiPoliceBadge } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";

const PlaceHolder = () => {
  return (
    <div className='placeHolder'>
      <span className='placeHolder__Logo'><GiMagicGate size={100} /></span>
        <h1 className='placeHolder__title'>Bienvenido a RPG Messenger</h1>
        <p className='placeHolder__text'>Selecciona un contacto para comenzar tu aventura de rol por mensajería</p>
        <span className='placeHolder__details'><GiPerspectiveDiceSixFacesOne size={15} />  Roll dados  <GiPoliceBadge size={15} />  Ver stats <GiNotebook />  Gestionar campañas</span>
    </div>
  )
}

export default PlaceHolder