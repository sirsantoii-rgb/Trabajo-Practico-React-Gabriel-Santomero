import "./MenssageContact.css"

const MenssageContact = () => {
    return (
        <div className="menssage__contact">
            <div className="contacto__info">
                <img className="contacto" src="../../.././Recursos/FotoGabriel.jpg" alt="FotoGabriel" />
                <span class="estatus online"></span>
                <div className="contacto__card">
                    <span className="contacto__name">Gabriel Santomero</span>
                    <div className="game_info_contact">
                        <span class="level"> Lv. 12 </span>
                        <span className="clase">Guerrero</span>
                    </div>
                    <div className="game_info">
                        <span className="contacto__frase"> "Aprendiendo a jugar"</span>
                        <span className="contacto__game">Dungeon & Dragons</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MenssageContact