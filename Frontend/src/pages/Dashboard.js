import React from 'react';

import Footer from '../components/Footer';

export default function Dashboard() {

  const user = localStorage.getItem('user')

  return (
    <>
    <div>
      <div className="chat-header">
        <h3>Chat - FormareTech</h3>
        <div className="features-user">
          <label htmlFor="user-photo">Escolher/Mudar foto</label>
          <input type="file" id="user-photo"/>
          <button>SAIR</button>
          <p>{user}<span></span></p>
        </div>
      </div>
      <div className="main-div">
        <button>
          <span className="material-icons">send</span>
        </button>
        <label htmlFor="input-field">

        </label>
        <input type="text" name="" id="input-field" placeholder="Digite sua mensagem aqui"/>
      </div>
    </div>
    <Footer/>
    </>
  )
}
