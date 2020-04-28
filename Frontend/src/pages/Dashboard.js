import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import Footer from '../components/Footer';

let socket

export default function Dashboard({ location }) {
  const [client, setClient] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'localhost:5000';

  useEffect(()=>{
    const {name} = queryString.parse(location.search);
    socket = io(ENDPOINT)

    setClient(client);

    socket.emit('join', {name}, () => {

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
        <button>
          <span className="material-icons">send</span>
        </button>
        <label htmlFor="input-field">

        </label>
        <input type="text" name="" id="input-field" placeholder="Digite sua mensagem aqui" value={message} onChange={event => setMessage(event.target.value)} onKeyPress={event => event.key === 'Enter'?sendMessage(event):null}/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
