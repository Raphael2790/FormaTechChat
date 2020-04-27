import React, { useState }from 'react';

import '../App.css';


export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('user', email);

    history.push('/dashboard');
  }
  

  return (
      <div className="initial-content">
      <h1 className="title">Chat Online - Login</h1>
      
      <div className="headers active">
        <h3>Login</h3> 
        <h3>Cadastrar-se</h3>
      </div>

      <form className="form-login" onSubmit={handleSubmit}>
        <div className="inputs">
        <label htmlFor="name"><span class="material-icons">
        face</span></label>
        <input type="text" id="name" placeholder="Digite um nome de usuario" onChange={event => setUser(event.target.value)} value={user} required/>
        </div>

        <div className="inputs">
        <label htmlFor="email"><span class="material-icons">
        alternate_email</span></label>
        <input type="email" id="email" placeholder="Digite um email valido para logar-se" onChange={event => setEmail(event.target.value)} value={email} required/>
        </div>

        <button type="submit">Entrar</button>
      </form>
      </div>
  )
}
