import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Ip_Register.css';

function IpRegister() {
  const [ip, setIp] = useState('');
  const [city, setCity] = useState('');
  const [continent, setContinent] = useState('');
  const [country, setCountry] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [timezone, setTimezone] = useState('');
  const [radius, setRadius] = useState('');
  const [postal, setPostal] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryAbbreviator, setCountryAbbreviator] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [stateAbbreviator, setStateAbbreviator] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function onRegisterSubmit(e) {
    e.preventDefault();
    try{
      const token = await axios.post('https://reqres.in/api/register');
      setMessage('Cadastro realizado com sucesso!');
      setTimeout(function () {
        window.location = '/ProjetoWeb2/#/ipregister';
      }, 1500);
    }catch(error){
      setError('Houve um erro e não foi possível completar o cadastro. Tente novamente mais tarde.');
    }
  }

  return (
    <div className="IpRegister">
    <h1>Cadastro de IP:</h1>
    <form onSubmit={onRegisterSubmit} enctype="multipart/form-data" method="POST">

      <input id="ipr" type="ipr" value={ip} placeholder="Digite o IP" onChange={e => setIp(e.target.value)}/>
      <br/>

      <input id="city" type="city" value={city} placeholder="Digite o nome da cidade" onChange={e => setCity(e.target.value)}/>
      <br/>

      <input id="continent" type="continent" value={continent} placeholder="Digite o nome do continente" onChange={e => setContinent(e.target.value)}/>
      <br/>

      <input id="country" type="country" value={country} placeholder="Digite o nome do país" onChange={e => setCountry(e.target.value)}/>
      <br/>

      <input id="latitude" type="latitude" value={latitude} placeholder="Digite a latitude" onChange={e => setLatitude(e.target.value)}/>
      <br/>

      <input id="longitude" type="longitude" value={longitude} placeholder="Digite a longitude" onChange={e => setLongitude(e.target.value)}/>
      <br/>

      <input id="timezone" type="timezone" value={timezone} placeholder="Digite o fuso horário" onChange={e => setTimezone(e.target.value)}/>
      <br/>

      <input id="radius" type="radius" value={radius} placeholder="Digite o raio de precisão" onChange={e => setRadius(e.target.value)}/>
      <br/>

      <input id="postal" type="postal" value={postal} placeholder="Digite o código postal" onChange={e => setPostal(e.target.value)}/>
      <br/>

      <input id="countryCode" type="countryCode" value={countryCode} placeholder="Digite o código do país" onChange={e => setCountryCode(e.target.value)}/>
      <br/>

      <input id="countryAbbreviator" type="countryAbbreviator" value={countryAbbreviator} placeholder="Digite a sigla do país" onChange={e => setCountryAbbreviator(e.target.value)}/>
      <br/>

      <input id="stateCode" type="stateCode" value={stateCode} placeholder="Digite o código do estado" onChange={e => setStateCode(e.target.value)}/>
      <br/>

      <input id="stateAbbreviator" type="stateAbbreviator" value={stateAbbreviator} placeholder="Digite a sigla do estado" onChange={e => setStateAbbreviator(e.target.value)}/>
      <br/>

      <textarea id="note" type="note" rows = "4" cols = "50" value={note} placeholder="Observações" onChange={e => setNote(e.target.value)}/>
      <br/>

      <h2 className="mapTitle">Mapa:</h2>
      <br/>

      <input id="map" type="file" accept="image/*,video/*"/>
      <br/>

      <button className="RegisterIpBtn" type="submit">Cadastrar</button>
      <Link to="/searchadm"><button className="VoltarBtn">Voltar</button></Link>
      </form>

      {error&&<span  className="Register-error">{error}</span>}
      {message&&<span className="Register-message">{message}</span>}

    </div>
  );
}

export default IpRegister;
