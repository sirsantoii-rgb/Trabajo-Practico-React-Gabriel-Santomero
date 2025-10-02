import React from 'react'
import './AtackTools.css'
import { GiGladius } from "react-icons/gi";

const AtackTools = () => {
  return (
    <div className='atack__tools__container'>
        <h1 className='atack__tools__title'>Ataque</h1>
        <div className='atack__tools'>
            <button className='button-dice-atack'>+</button>
            <button className='button-dice-atack'>-</button>
            <span>=</span>
            <span>0</span>
        </div>
        <button className='button-dice-atack atacar'><GiGladius size={20}/></button>
    </div>
  )
}

export default AtackTools