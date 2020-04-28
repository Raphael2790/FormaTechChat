import React from 'react'

import './Input.css';

export default function Input({ sendMessage, setMessage, message }) {
  return (
    <form className="formInput">
      <button className="sendButton" onClick={(event) => sendMessage(event)}>
          <span className="material-icons">send</span>
        </button>
        <label htmlFor="input-field">

        </label>
        <input type="text" id="input-field"className="input" 
        placeholder="Digite sua mensagem aqui..." value={message} onChange={event => setMessage(event.target.value)} onKeyPress={event => event.key === 'Enter'?sendMessage(event):null}/>
    </form>
  )
}
