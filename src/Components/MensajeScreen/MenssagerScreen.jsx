import React from 'react'
import MenssageCard from './MenssageCard/MenssageCard'
import './MenssageScreen.css'


const MenssagerScreen = (props) => {

  const messages_list_JSX = props.messages.map(
  ( message ) => {  
  
  return (
    <div className='menssager__screen'>
        <MenssageCard key={message.id}
          author={message.author}
          timestamp={message.timestamp}
          content={message.content}
          id={message.id}/>
    </div>
  )
}
  )
  return (
    <div>
      {messages_list_JSX}
    </div>
  )
}

export default MenssagerScreen