import React from 'react'
import './HeaderMenssage.css'
import { GiHeartBeats } from "react-icons/gi";
import { VscGear } from "react-icons/vsc";
import HeaderStatsMenu from './HeaderStatsMenu/HeaderStatsMenu'
import { useState } from 'react'


const HeaderMenssage = () => {
    const [is_open, setIsOpen] = useState(false)
    const toggleStatsMenu = () =>{
        setIsOpen(!is_open)
    }

  return (
    <div className='header__user__menssage'>
        <div className='header__user'>
            <div className='header__user__container1'>
            <   img className="header__user__image" src="../../.././Recursos/FotoGabriel.jpg" alt="FotoGabriel" />
                <div className='header__user__info_container'>
                <h1 className='header__user__name'>Nombre de usuario</h1>
                <div>
                <div className='header__user__info'>
                    <span className='header__level'>level</span>
                    <span className='header__clase'>Clase</span>
                    <span className='header__juego'>juego</span>
                    <span className='header__estatus header_online'>Online</span>
                </div>
                </div>
                </div>
            </div>
        <div className='header__buttons'>
            <button className='header__stats-button' onClick={toggleStatsMenu}><GiHeartBeats size={30} /></button>
            <button className='header__stats-button' onClick={toggleStatsMenu}><VscGear size={30} /></button>
        </div>
        </div>
        {
            is_open &&
            <HeaderStatsMenu />
        }
    </div>
  )
}

export default HeaderMenssage