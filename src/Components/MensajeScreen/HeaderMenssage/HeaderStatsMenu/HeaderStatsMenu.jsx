import React from 'react'
import './HeaderStatsMenu.css'
import { GiHealthNormal } from "react-icons/gi";
import { GiMagnifyingGlass } from "react-icons/gi";

const HeaderStatsMenu = () => {
  return (
    <div className='stats__menu__container'>
        <div className='stats__menu__info__user'>
            <h1 className='stats__menu__name'>Nombre de usuario</h1>
            <div className='stats__menu'>
                <span className='stats__menu__level'>level</span>
                <span className='stats__menu__clase'>Clase</span>
            </div>
            <span className='stats__menu__juego'>Nombre de juego</span>
            <div className='stats__menu__vida'>
                <span className='stats__menu__vida-text'><GiHealthNormal  size={20} color='rgb(14, 182, 104)'/>  Vida</span>
                <span className='stats__menu__vida-text'>10/10</span>
            </div>
            
        </div>
        <div className='stats__menu__info-atributes'>
            <span className='stats__menu__atributes-title'>Atributos</span>
            <div className='stats__menu__atributes'>
                <span className='stats__atributes'>Fuerza: 10</span>
                <span className='stats__atributes'>Destresa: 8</span>
                <span className='stats__atributes'>Inteligencia: 14</span>
                <span className='stats__atributes'>Sabiduria: 15</span>
                <span className='stats__atributes'>Constitucion: 13</span>
                <span className='stats__atributes'>Carisma: 10</span>
            </div>
        </div>
        <div className='stats__menu__info-inventary'>
            <span className='stats__menu__atributes-title'>Inventario</span>
            <div>
                <input type="text" />
                <button className='stats__menu__button'>+</button>
            </div>
            <ul>
                <li className='stats__menu__item'>Antorcha</li>
                <li className='stats__menu__item'>Pocion vida 1d6</li>
                <li className='stats__menu__item'>Espada 2d6</li>
                <li className='stats__menu__item'>Cuerda</li>
                <li className='stats__menu__item'>Queso</li>
            </ul>
            <div>
            <span className='stats__menu__atributes-title'>Dinero: 20</span>
            <button className='stats__menu__button'>+</button>
            <button className='stats__menu__button'>-</button>

            </div>
            <div>
                <input type="text" />
                <button className='stats__menu__button'><GiMagnifyingGlass size={20} color='rgba(253, 255, 254, 1)'/></button>
            </div>
        </div>
    </div>
  )
}

export default HeaderStatsMenu