import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContactById } from "../../service/contactService";
import HeaderMenssage from "../MensajeScreen/HeaderMenssage/HeaderMenssage";
import MenssagerScreen from "../MensajeScreen/MenssagerScreen";
import FormMenssage from "../MensajeScreen/FormMenssage/FormMenssage";
import "./ChatWindow.css";

export const ChatWindow = () => {
  const { id_contacto } = useParams(); 
  const [messages, setMessages] = useState([]);
    

  useEffect(() => {
    if (!id_contacto) return;

    const contacto = getContactById(id_contacto);

    if (contacto?.messages) {
      setMessages(contacto.messages);
    } else {
      setMessages([]);
    }
  }, [id_contacto]);

  const onCreateNewMessage = (new_message) => {
    const new_message_object = {
      content: new_message,
      author: "YO",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      id: messages.length + 1,
    };
    setMessages([...messages, new_message_object]);
  };

  return (
    <>
      <HeaderMenssage />
      <div className="menssage__screen">
        <MenssagerScreen messages={messages} />
      </div>
      <FormMenssage onCreateNewMessage={onCreateNewMessage} />
    </>
  );
};