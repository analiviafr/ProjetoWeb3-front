import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(['']);
  const [flag, setFlag] = useState('');
  const [message, setMessage] = useState('');

  async function onLoginSubmit(e) {
    e.preventDefault();
    if(!email){
      setError('E-mail inválido');
      return;
    }
    if(!password){
      setError('Senha inválida');
      return;
    }

    try {
      const res = await axios.post('https://reqres.in/api/login', {"email": email,"password": password});
      localStorage.setItem('app-token', res.data.token);
      setError('');
      setFlag(localStorage.getItem('app-token'));
      setMessage('Login realizado com sucesso! Você será redirecionado(a) para a página de Pesquisa.');
      setTimeout(function () {
        window.location = '/ProjetoWeb2/#/search';
       }, 2000);
      
    } catch{
      setError('Endereço de email ou senha inválido.');
      return;
    }
  }

  useEffect(() => {
    setFlag(localStorage.getItem('app-token'));
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
