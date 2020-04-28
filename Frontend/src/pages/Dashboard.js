import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Footer from '../components/Footer/Footer';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';
import Messages from '../components/Messages/Messages';

let socket

export default function Dashboard({ location }) {
  const [client, setClient] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(()=>{
    const {name} = queryString.parse(location.search);
    socket = io(ENDPOINT)

    setClient(name);

    socket.emit('join', {name}, (error) => {
      if(error) {
        alert(error);
      }
    });

  

    return () => {
      socket.emit('disconnect');

      socket.off();
    }
    
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
    socket.emit('sendMessage', message, () => setMessage(''));
  }
}

console.log(message, messages);


  return (
    <>
    <div>
      <div className="chat-header">
        <h3>Chat - FormareTech</h3>
        <div className="features-user">
          <label htmlFor="user-photo">Escolher/Mudar foto</label>
          <input type="file" id="user-photo"/>
          <button>SAIR</button>
          <p><span></span></p>
        </div>
      </div>
      <div className="main-div">
        <div className="containerDash">
        <InfoBar client={client}/>
        <Messages messages={messages} client={client}/>
        <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
