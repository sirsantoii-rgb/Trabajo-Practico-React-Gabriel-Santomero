import React from 'react'
import './DiceRoll.css'


const DiceRoll = () => {
  return (
    <div className='dice__roll__container'>
        <h1 className='dice__roll__title'>Dados</h1>
        <span>Cantidad de dados</span>
        <div className='dice-container'>
            <div className='dice-quantity'>
                <button className='button-dice'>1</button>
                <span>+</span>
                <button className='button-dice'>1</button>
                <span>+</span>
                <button className='button-dice'>1</button>
                <span>+</span>
                <button className='button-dice'>1</button>
            </div>
            <button className='button-dice button-dice2'>+</button>
           
        </div>
        <span>Agregar o quitar dados</span>
        <button className='dice__roll'>Lanzar dados</button>
    </div>
  )
}

export default DiceRoll