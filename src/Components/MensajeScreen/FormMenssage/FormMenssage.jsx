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



const FormMenssage = () => {
  const [is_open, setIsOpen] = useState(false)
      const toggleDiceMenu = () =>{
          setIsOpen(!is_open)
      }
  const [is_openAtack, setIsOpenAtack] = useState(false)
      const toggleAtackMenu = () =>{
          setIsOpenAtack(!is_openAtack)
      }

  const [is_openSkills, setIsOpenSkills] = useState(false)
      const toggleSkillsMenu = () =>{
          setIsOpenSkills(!is_openSkills)
      }

  return (
    <div className='form__menssage-container'>
      <div className='form__menssage'>
        <input type="text" className='form__menssage-text'  />
        <button className='form__menssage-submit'><TiPencil  size={30}/></button>
      </div>
      <div className='form__menssage__buttons'>
        <button className='form__menssage__buttons__roll' onClick={toggleDiceMenu}> <GiDiceSixFacesSix />  Roll</button>
        <button className='form__menssage__buttons__roll' onClick={toggleAtackMenu}> <GiGladius /> Ataque</button>
        <button className='form__menssage__buttons__roll' onClick={toggleSkillsMenu}> <GiHeavyRain /> Skills</button>
      </div>
      {
            is_open &&
            <DiceRoll />
        },
        {
            is_openAtack &&
            <AtackTools />
        }
        {
            is_openSkills &&
            <SkillsTools />
        }
    </div>
  )
}

export default FormMenssage