import React, { useEffect, useState, useMemo } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import camera from '../assets/camera.svg';
import logo from '../assets/logo_footer.png';

import Footer from '../components/Footer/Footer';
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';
import Messages from '../components/Messages/Messages';

let socket

export default function Dashboard({ location }) {
  const [client, setClient] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [thumbnail, setThumbnail] = useState('');

  const ENDPOINT = 'localhost:5000';

  const preview = useMemo(() => {
    return thumbnail?URL.createObjectURL(thumbnail): null;
  } , [thumbnail])

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
        <div className="chatName">
        <img src={logo} alt="Logo FormareTech"/>
        <h3>Chat - FormareTech</h3>
        </div>
        <div className="features-user">
        <label 
        id="thumbnail"
        style={{backgroundImage:`url(${preview})`}}
        className={thumbnail?"has-thumbnail":""}
        >
          <img src={camera} alt="Imagem Thumbnail"/>
          <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
        </label>
          <a href="/"><span class="material-icons">
          exit_to_app
          </span></a>
          
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
