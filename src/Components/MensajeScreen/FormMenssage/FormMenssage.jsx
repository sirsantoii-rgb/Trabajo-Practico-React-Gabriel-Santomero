import React from 'react'
import './FormMenssage.css'
import { GiDiceSixFacesSix } from "react-icons/gi";
import { GiGladius } from "react-icons/gi";
import { GiHeavyRain } from "react-icons/gi";
import { TiPencil } from "react-icons/ti";
import { useState } from 'react';
import DiceRoll from './RollTools/DiceRoll';
import AtackTools from './RollTools/AtackTools';
import SkillsTools from './RollTools/SkillsTools';
import { BiLandscape } from "react-icons/bi";
import { BiPlusCircle } from "react-icons/bi";


const FormMenssage = ({ onCreateNewMessage }) => {
  const [is_open, setIsOpen] = useState(false)
  const [is_openAtack, setIsOpenAtack] = useState(false)
  const [is_openSkills, setIsOpenSkills] = useState(false)

  const toggleDiceMenu = () => {
    setIsOpen(!is_open)
  }

  const toggleAtackMenu = () => {
    setIsOpenAtack(!is_openAtack)
  }

  const toggleSkillsMenu = () => {
    setIsOpenSkills(!is_openSkills)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const message_value = form.mensaje.value




    if (onCreateNewMessage) {
      onCreateNewMessage(message_value)
    } else {
      
    }


    form.reset()
  }

  return (
    <div className='form__menssage-container'>
      <div >
        <form className='form__menssage'  onSubmit={handleSubmit}>
          <button className='form__menssage-emoji display__none'><BiLandscape size={30} /></button>
          <button className='form__menssage-emoji'><BiPlusCircle size={30} /></button>
          <textarea id='mensaje' name='mensaje' className='form__menssage-text' />
          <button type="submit" className='form__menssage-submit'>
            <TiPencil size={30}/>
          </button>
        </form>
      </div>
      <div className='form__menssage__buttons'>
        <button type="button" className='form__menssage__buttons__roll' onClick={toggleDiceMenu}>
          <GiDiceSixFacesSix /> Roll
        </button>
        <button type="button" className='form__menssage__buttons__roll' onClick={toggleAtackMenu}>
          <GiGladius /> Ataque
        </button>
        <button type="button" className='form__menssage__buttons__roll' onClick={toggleSkillsMenu}>
          <GiHeavyRain /> Skills
        </button>
      </div>
      
      {is_open && <DiceRoll />}
      {is_openAtack && <AtackTools />}
      {is_openSkills && <SkillsTools />}
    </div>
  )
}

export default FormMenssage