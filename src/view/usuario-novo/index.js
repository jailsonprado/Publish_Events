import React, { useState } from 'react';
import './usuario-novo.css'
import firebase from "../../config/firebase";
import 'firebase/auth';

export default function NovoUsuario(){
    return (
       <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weigth-bold">Cadastro</h1>

                <input type="email" className="form-control my-2" placeholder="Email" />
                <input type="password" className="form-control my-2" placeholder="Senha" />

                <button className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
            </form>
       </div>
    )
}
