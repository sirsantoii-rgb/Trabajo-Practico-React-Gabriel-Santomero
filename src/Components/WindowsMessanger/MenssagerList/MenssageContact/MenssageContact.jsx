import "./MenssageContact.css"
import React from 'react'
import { Link } from 'react-router-dom'
import {getAllContacts} from '../../../../service/contactService'

const MenssageContact = () => {
    const contacts = getAllContacts()
    const contact_list_jsx = contacts.map(
        (contact) => {
            return <ContactItem
                contact={contact}
                key={contact.id}
            />
        }
    )

    return (
        <div>
            {
                contact_list_jsx
            }
        </div>
    )
}



const ContactItem = (props) => {
    const contact = props.contact
    return (
        <Link to= {'/contacto/' + contact.id}>
        <div className="menssage__contact">
            <div className="contacto__info">
                <img className="contacto" src= {contact.profile_img}  />
                <span className="estatus online"></span>
                <div className="contacto__card">
                    <h1 className="contacto__name">{contact.name}</h1>
                    <div className="game_info_contact">
                        <span className="level"> {contact.level} </span>
                        <span className="clase">{contact.clase}</span>
                    </div>
                    <div className="game_info">
                        <span className="contacto__frase"> {contact.state}</span>
                        <span className="contacto__game">{contact.game}</span>
                    </div>
                </div>
            </div>
            
        </div>
        </Link>
    )
}

export default MenssageContact