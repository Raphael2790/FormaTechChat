import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../assets/logo.png';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Register({ history }) {

  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem('user', email);

    history.push('/dashboard');
  }

  return (
    <>
    <Header/>

    <div className="container">

    <img src={logo} alt="Logo Formareassociados"/>

    <div className="initial-content">
    <h1 className="title">Chat Online - Login</h1>
    
    <div className="headers active">
      <Link to="/" style={{textDecoration:'none'}}>
      <h3>Login</h3>
      </Link>
      <Link to="/register" style={{textDecoration:'none'}}>
        <h3>Cadastrar-se</h3>
      </Link>
    </div>

    <form className="form-register" onSubmit={handleSubmit}>
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
    </div>
    <Footer/>
    </>

  )
}
