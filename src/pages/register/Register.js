import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import api from '../../services/api';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');

  async function onRegisterSubmit(e) {
    e.preventDefault(); //faz com que a página não atualize sozinha após o envio do form

    if (!email) {
      setError('Digite um email válido');
      return;
    }

    if (email.length <= 7) {
      setError('E-mail inválido');
      return;
    }

    if (!password) {
      setError('Senha inválida');
      return;
    }

    if (!role) {
      setError('Escolha um tipo de usuário');
      return;
    }

    if (password.length <= 8) {
      setError('Sua senha deve conter ao menos 8 caracteres');
      return;
    }

    const data = {
      email,
      password,
      role,
    };

    try{
      await api.post('auth/register', data);
      setMessage('Cadastro realizado com sucesso! Você será redirecionado (a) para a página de Login');
      setTimeout(function () {
        window.location = '/ProjetoWeb2/#/login';
       }, 2000);
    }catch{
      setError('Não foi possível realizar o cadastro. Tente novamente mais tarde.');
      setTimeout(function () {
        setError('');
        setEmail('');
        setRole('');
        setPassword('');
       }, 2000);
    }
  }

  return (
    <div className="Register">
      <h1>Cadastro</h1>
      <form onSubmit={onRegisterSubmit}>

        <input id="email" type="email" value={email} placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)}/>
        <br/>

        <input id="password" type="password" value={password} placeholder="Digite sua senha" onChange={e => setPassword(e.target.value)}/>
        <br/>

        <select value={role} id="roleSelect" onChange={e => setRole(e.target.value)}>
          <option value="" disabled selected hidden>Selecione sua credencial</option>
          <option value="user">Usuário</option>
          <option value="admin">Administrador</option>
        </select>
        <br/>

        <Link to="/"><button className="Voltar-btn">Voltar</button></Link>
        <button className="Register-btn" type="submit">Cadastrar</button>
      </form>

      {error&&<span  className="Register-error">{error}</span>}
      {message&&<span className="Register-message">{message}</span>}
    </div>
  );
}

export default Register;
