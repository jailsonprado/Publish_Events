import React from 'react';

import './login.css'


export default function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto form-login">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>
                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input type="password" id="inputPassword " className="form-control my-2" placeholder="Senha" />

                <button className="btn btn-lg  btn-block btn-login" type="submit">Entrar</button>
                <div className="msg-login text-white text-center my-5">
                    <span><strong>Wow!</strong> Voce esta conectado! &#128640; </span><br />
                    <span><strong>Ops!</strong> Verifique se a senha ou usuários estão corretos &#10071; </span>
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href='#' className='mx-2'>Recuperar senha</a>
                    <span className="symbol">&#9875;</span>
                    <a href='#' className='mx-2'>Quero cadastrar</a>
                </div> 
            </form>
        </div>
    )
}