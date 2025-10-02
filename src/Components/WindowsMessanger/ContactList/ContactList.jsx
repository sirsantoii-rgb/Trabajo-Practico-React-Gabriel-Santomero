import "./ContactList.css"


import { BiSearchAlt2 } from "react-icons/bi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import { GiFreemasonry } from "react-icons/gi";


const ContactList = () => {
    return (
        <div className="contact__list">
            <nav className="contact__list__nav">
                <div className="contact__list__nav__header">
                    <h1>Logo</h1>
                    <button className="contact__list__button-newcontact"> <BiMessageSquareAdd size={15}/>  Nueva Conversacion</button>
                </div>
                <div className="contact__list__nav__searchbar">
                    <input type="search" className="contact__list__nav__search" />
                    <button className="button-header-contactlist"> <BiSearchAlt2 size={14} /> </button>
                </div>
                <div className="contact__list__nav__buttons">
                    <button className="button-header-contactlist"><GiPerspectiveDiceSixFacesOne size={20} />  <span>Roll</span></button>
                    <button className="button-header-contactlist"> <GiSwordsEmblem  size={20} /> Games</button>
                    <button className="button-header-contactlist"><GiFreemasonry size={20}/>  Campañas</button>
                </div>
            </nav>
            
        </div>
    )
}


export default ContactList