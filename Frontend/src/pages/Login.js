import React, { useState}from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../assets/logo.png';

import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Login() {
  const [client, setClient] = useState('');
  
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
          <Link to="/register"style={{textDecoration:'none'}}>
            <h3>Cadastrar-se</h3>
          </Link>
        </div>

        <form className="form-login">
          <div className="inputs">
          <label htmlFor="name"><span class="material-icons">
          face</span></label>
          <input type="text" id="name" placeholder="Digite um nome de usuario" onChange={event => setClient(event.target.value)} value={client} required/>
          </div>
          <Link onClick={event => !client?event.preventDefault():null} to={`/dashboard?name=${client}`}>
          <button type="submit">Entrar</button>
          </Link>
        </form>
      </div>

      </div>
      <Footer/>
      </>
  )
}
