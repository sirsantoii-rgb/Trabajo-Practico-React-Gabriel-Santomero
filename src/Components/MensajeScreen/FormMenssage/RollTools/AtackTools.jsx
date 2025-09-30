import React from 'react'
import './AtackTools.css'


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
        <button className='button-dice-atack atacar'>Atacar</button>
    </div>
  )
}

export default AtackTools