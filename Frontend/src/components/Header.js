import React from 'react'

export default function Header() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <nav className="header-container">
      
        <form className="form-content" onSubmit={handleSubmit}>
            <ul className="form-ul">
              <li>
                <a href="https://formareassociados.com.br/evento/#">
                  <h4>area exclusiva - ambiente ead</h4>
                </a>
              </li>
              <li>
                <input type="text" placeholder="login" required/>
              </li>
              <li>
              <input type="text"placeholder="senha" required/>
              <a href="https://www.formareassociados.com.br/moodle/login/forgot_password.php"><p className="forgot-password">Esqueci minha senha</p></a>
              </li>
              <li>
              <button>entrar</button>
              </li>
          </ul>
        </form>
        
    </nav>
  )
}
