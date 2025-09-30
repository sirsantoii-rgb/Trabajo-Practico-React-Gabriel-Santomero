import React from 'react'
import './MenssageCard.css'

const MenssagerCard = () => {
  return (
    <div >
        <div className='menssage__card'>
            <h1 className='name__user__menssagecard'>Nombre del usuario</h1>
            <p className='menssage__card__text'>Mensaje del autor</p>
        </div>
            <span className='menssage__card__date'>fecha</span>
    </div>
  )
}

export default MenssagerCard