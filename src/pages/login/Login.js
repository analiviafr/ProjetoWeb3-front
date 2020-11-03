import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import api from '../../services/api';

import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(['']);
  const [flag, setFlag] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');

  async function onLoginSubmit(e) {
    e.preventDefault();
    if(!email){
      setError('E-mail inválido');
      return;
    }

    if (email.length <= 7) {
      setError('E-mail inválido');
      return;
    }

    if(!password){
      setError('Senha inválida');
      return;
    }

    if (password.length <= 8) {
      setError('Sua senha deve conter ao menos 8 caracteres');
      return;
    }

    const data = {
      email,
      password
    };

    try {
      const res = await api.post('auth/authenticate', data);
      localStorage.setItem('app-token', res.data.token);
      localStorage.setItem('app-token', res.data.user.role);

      setError('');

      setFlag(localStorage.getItem('app-token'));
      setMessage('Login realizado com sucesso! Você será redirecionado(a) para a página de Pesquisa.');

      setTimeout(function () {
        window.location = '/ProjetoWeb2/#/searchadm';
      }, 2000);

      /*if (localStorage.getItem('app-token:role') === 'admin') {
        setRole(localStorage.getItem('app-token:role'));
        setTimeout(function () {
          window.location = '/ProjetoWeb2/#/searchadm';
        }, 2000);
      }
      else {
        setRole(null);
        setTimeout(function () {
          window.location = '/ProjetoWeb2/#/search';
        }, 2000);
      }*/

      /*setTimeout(function () {
        window.location = '/ProjetoWeb2/#/search';
      }, 2000);*/

    } catch{
      setError('Endereço de email ou senha inválido.');
      return;
    }
  }

  useEffect(() => {
    setFlag(localStorage.getItem('app-token'));
    if (localStorage.getItem('app-token:role') === 'admin') {
      setRole(localStorage.getItem('app-token:role'));
    }
    else {
      setRole(null);
    }
  },[])


  return (
    <div className="Login-app">
      <h1>Login</h1>
      <form onSubmit={onLoginSubmit}>

        <input id="email" type="email" value={email} placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
        <br/>

        <input id="password" type="password" value={password} placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
        <br/>

        <Link to="/"><button className="Voltar-btn">Voltar</button></Link>
        <button className="Login-btn" type="submit">Entrar</button>
        </form>

        {error&&<span  className="Login-error">{error}</span>}
        {message&&<span className="Login-message">{message}</span>}

    </div>
  );
}
