import "./WindowsMessanger.css";
import ContactList from "./ContactList/ContactList";
import MenssagerList from "./MenssagerList/MenssagerList";
import MenssagerScreen from "../MensajeScreen/MenssagerScreen";
import HeaderMenssage from "../MensajeScreen/HeaderMenssage/HeaderMenssage";
import FormMenssage from "../MensajeScreen/FormMenssage/FormMenssage";

const WinowsMessanger = () => {
    return (
        <div className="windows__messanger">
            <div className="windows__messanger__contact-list" >
                <ContactList/>
                <MenssagerList/>
            </div>
            <div className="windows__messanger__menssage">
                <HeaderMenssage/>
                
                <MenssagerScreen/>
                <FormMenssage/>
            </div>
                        
        </div>
    );
};


export default WinowsMessanger