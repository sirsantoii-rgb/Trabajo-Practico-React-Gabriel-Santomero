import React from 'react'
import './Skillstools.css'
import { GiApothecary } from "react-icons/gi";
import { GiArrowsShield } from "react-icons/gi";
import { GiArmoredBoomerang } from "react-icons/gi";
import { GiBackup } from "react-icons/gi";
import { GiBangingGavel } from "react-icons/gi";
import { GiBoltBomb } from "react-icons/gi";
import { GiBrightExplosion } from "react-icons/gi";
import { GiBurningBlobs } from "react-icons/gi";
import { GiBurningEye } from "react-icons/gi";
import { GiCactus } from "react-icons/gi";


const Skillstools = () => {
  return (
    <div className='skills__tools__container'>
        <h1 className='skills__tools__title'>Habilidades</h1>
        <div className='skills__tools'>
            <button className='button-skill'><GiApothecary /></button>
            <button className='button-skill'><GiArrowsShield /></button>
            <button className='button-skill'><GiArmoredBoomerang /></button>
            <button className='button-skill'><GiBackup /></button>
            <button className='button-skill'><GiBangingGavel /></button>
        </div>
        <div className='skills__tools'>
            <button className='button-skill'><GiBoltBomb /></button>
            <button className='button-skill'><GiBrightExplosion /></button>
            <button className='button-skill'><GiBurningBlobs /></button>
            <button className='button-skill'><GiBurningEye /></button>
            <button className='button-skill'><GiCactus /></button>
        </div>
    </div>
  )
}

export default Skillstools