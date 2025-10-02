import React from 'react'
import './MenssageCard.css'

const MenssagerCard = (propiedades) => {
  return (
    <div >
        <div className='menssage__card'>
            <h1 className='name__user__menssagecard'>{propiedades.author}</h1>
            <p className='menssage__card__text'>{propiedades.content}</p>
        </div>
            <span className='menssage__card__date'>{propiedades.timestamp}</span>
    </div>
  )
}

export default MenssagerCard