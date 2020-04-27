import React from 'react'

export default function Header() {
  return (
    <div className="header-container">

      
        <form >
          <nav>
            <ul className="form-ul">
              <li>
              <h2>area exclusiva - ambiente ead</h2>
              </li>
              <li>
                <input type="text" placeholder="login"/>
              </li>
              <li>
              <input type="text"placeholder="senha"/>
              <a href="https://www.formareassociados.com.br/moodle/login/forgot_password.php"><p>Esqueci minha senha</p></a>
              </li>
              <li>
              <button>entrar</button>
              </li>
          </ul>
          </nav>
        </form>
      
    </div>
  )
}
