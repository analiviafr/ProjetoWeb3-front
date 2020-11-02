import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import api from '../../services/api';
import './Ip_Register.css';
import {useForm} from 'react-hook-form';

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
  const [map, setMap] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const {ipregister, handleSubmit} = useForm();

  const onSubmit = async(ipData) => {

    const formData = new FormData();

    formData.append("ipr", ipData.ip);
    formData.append("city", ipData.city);
    formData.append("continent", ipData.continent);
    formData.append("country", ipData.country);
    formData.append("latitude", ipData.latitude);
    formData.append("longitude", ipData.longitude);
    formData.append("timezone", ipData.timezone);
    formData.append("radius", ipData.radius);
    formData.append("postal", ipData.postal);
    formData.append("countryCode", ipData.countryCode);
    formData.append("countryAbbreviator", ipData.countryAbbreviator);
    formData.append("stateCode", ipData.stateCode);
    formData.append("stateAbbreviator", ipData.stateAbbreviator);
    formData.append("note", ipData.note);
    formData.append("image", ipData.image);

    const response = await fetch("http://localhost:3000/ip/ipregister", {
      method: "POST",
      body: formData,
    }).then(response => response.json());
    
    if(response.status){
      setMessage('Cadastro realizado com sucesso!');
      setTimeout(function () {
        setMessage('');
        setIp('');
        setCity('');
        setContinent('');
        setCountry('');
        setLatitude('');
        setLongitude('');
        setTimezone('');
        setRadius('');
        setPostal('');
        setCountryCode('');
        setCountryAbbreviator('');
        setStateCode('');
        setStateAbbreviator('');
        setNote('');
        setMap('');
      }, 2000);
    }
    else{
      setError('Houve um erro ao completar o cadastro. Tente novamente mais tarde.');
      setTimeout(function () {
        setMessage('');
        setIp('');
        setCity('');
        setContinent('');
        setCountry('');
        setLatitude('');
        setLongitude('');
        setTimezone('');
        setRadius('');
        setPostal('');
        setCountryCode('');
        setCountryAbbreviator('');
        setStateCode('');
        setStateAbbreviator('');
        setNote('');
        setMap('');
      }, 2000);
    }
  }

  /*form.addEventListener('submit', e => {
    e.preventDefault();
    //verifica o preenchimento dos campos obrigatórios
    if(!ip){
      setError('Por favor, preencha o campo de IP.');
      return;
    }
    if(!city){
      setError('Por favor, preencha o campo de cidade.');
      return;
    }
    if(!continent){
      setError('Por favor, preencha o campo de continente.');
      return;
    }
    if(!country){
      setError('Por favor, preencha o campo de país.');
      return;
    }
    if(!latitude){
      setError('Por favor, preencha o campo de latitude.');
      return;
    }
    if(!longitude){
      setError('Por favor, preencha o campo de longitude.');
      return;
    }
    if(!timezone){
      setError('Por favor, preencha o campo de fuso horário.');
      return;
    }
    if(!radius){
      setError('Por favor, preencha o campo de raio de precisão.');
      return;
    }
    if(!postal){
      setError('Por favor, preencha o campo de código postal.');
      return;
    }
    if(!countryCode){
      setError('Por favor, preencha o campo de código do país.');
      return;
    }
    if(!countryAbbreviator){
      setError('Por favor, preencha o campo de sigla do país.');
      return;
    }
    if(!stateCode){
      setError('Por favor, preencha o campo de código do estado.');
      return;
    }
    if(!stateAbbreviator){
      setError('Por favor, preencha o campo de sigla do estado.');
      return;
    }
    if(!map){
      setError('Por favor, adicione um mapa.');
      return;
    }
    let formData = new FormData;
    formData.append("ipr", ip);
    formData.append("city",city);
    formData.append("continent", continent);
    formData.append("country", country);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("timezone", timezone);
    formData.append("radius", radius);
    formData.append("postal", postal);
    formData.append("countryCode", countryCode);
    formData.append("countryAbbreviator", countryAbbreviator);
    formData.append("stateCode", stateCode);
    formData.append("stateAbbreviator", stateAbbreviator);
    formData.append("note", note);
    formData.append("image", e.target[0].files[0]);

  });

  async function onRegisterSubmit(e) {
    e.preventDefault();
    //Validação de campos obrigatórios vazios
    if(!ip){
      setError('Por favor, preencha o campo de IP.');
      return;
    }
    if(!city){
      setError('Por favor, preencha o campo de cidade.');
      return;
    }
    if(!continent){
      setError('Por favor, preencha o campo de continente.');
      return;
    }
    if(!country){
      setError('Por favor, preencha o campo de país.');
      return;
    }
    if(!latitude){
      setError('Por favor, preencha o campo de latitude.');
      return;
    }
    if(!longitude){
      setError('Por favor, preencha o campo de longitude.');
      return;
    }
    if(!timezone){
      setError('Por favor, preencha o campo de fuso horário.');
      return;
    }
    if(!radius){
      setError('Por favor, preencha o campo de raio de precisão.');
      return;
    }
    if(!postal){
      setError('Por favor, preencha o campo de código postal.');
      return;
    }
    if(!countryCode){
      setError('Por favor, preencha o campo de código do país.');
      return;
    }
    if(!countryAbbreviator){
      setError('Por favor, preencha o campo de sigla do país.');
      return;
    }
    if(!stateCode){
      setError('Por favor, preencha o campo de código do estado.');
      return;
    }
    if(!stateAbbreviator){
      setError('Por favor, preencha o campo de sigla do estado.');
      return;
    }
    if(!map){
      setError('Por favor, adicione um mapa.');
      return;
    }
    const formData = new FormData(); //criando o formulário a ser enviado ao backend
    formData.append("ipr", ip);
    formData.append("city",city);
    formData.append("continent", continent);
    formData.append("country", country);
    formData.append("latitude", latitude);
    formData.append("longitude", longitude);
    formData.append("timezone", timezone);
    formData.append("radius", radius);
    formData.append("postal", postal);
    formData.append("countryCode", countryCode);
    formData.append("countryAbbreviator", countryAbbreviator);
    formData.append("stateCode", stateCode);
    formData.append("stateAbbreviator", stateAbbreviator);
    formData.append("note", note);
    formData.append("image", map);
    const data = {
      ip,
      city,
      continent,
      country,
      latitude,
      longitude,
      timezone,
      radius,
      postal,
      countryCode,
      countryAbbreviator,
      stateCode,
      stateAbbreviator,
      note,
      map,
    };
    try{
      console.log(formData);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/ip/ipregister");
      xhr.send(formData);
      await api.post('ip/ipregister', data);
      setMessage('Cadastro realizado com sucesso!');
      setTimeout(function () {
        setMessage('');
        setIp('');
        setCity('');
        setContinent('');
        setCountry('');
        setLatitude('');
        setLongitude('');
        setTimezone('');
        setRadius('');
        setPostal('');
        setCountryCode('');
        setCountryAbbreviator('');
        setStateCode('');
        setStateAbbreviator('');
        setNote('');
        setMap('');
      }, 2000);
    }catch(error){
      console.log(error);
      setError('Houve um erro e não foi possível completar o cadastro. Tente novamente mais tarde.');
      setTimeout(function () {
        setError('');
        setIp('');
        setCity('');
        setContinent('');
        setCountry('');
        setLatitude('');
        setLongitude('');
        setTimezone('');
        setRadius('');
        setPostal('');
        setCountryCode('');
        setCountryAbbreviator('');
        setStateCode('');
        setStateAbbreviator('');
        setNote('');
        setMap('');
      }, 2000);
    }
  }*/

  return (
    <div className="IpRegister">
    <h1>Cadastro de IP:</h1>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input ref={ipregister} id="ipr" name="ipr" type="ipr" value={ip} placeholder="Digite o IP" onChange={e => setIp(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="city" name="city" type="city" value={city} placeholder="Digite o nome da cidade" onChange={e => setCity(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="continent" name="continent" type="continent" value={continent} placeholder="Digite o nome do continente" onChange={e => setContinent(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="country" name="country" type="country" value={country} placeholder="Digite o nome do país" onChange={e => setCountry(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="latitude" name="latitude" type="latitude" value={latitude} placeholder="Digite a latitude" onChange={e => setLatitude(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="longitude" name="longitude" type="longitude" value={longitude} placeholder="Digite a longitude" onChange={e => setLongitude(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="timezone" name="timezone" type="timezone" value={timezone} placeholder="Digite o fuso horário" onChange={e => setTimezone(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="radius" name="radius" type="radius" value={radius} placeholder="Digite o raio de precisão" onChange={e => setRadius(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="postal" name="postal" type="postal" value={postal} placeholder="Digite o código postal" onChange={e => setPostal(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="countryCode" name="countryCode" type="countryCode" value={countryCode} placeholder="Digite o código do país" onChange={e => setCountryCode(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="countryAbbreviator" name="countryAbbreviator" type="countryAbbreviator" value={countryAbbreviator} placeholder="Digite a sigla do país" onChange={e => setCountryAbbreviator(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="stateCode" name="stateCode" type="stateCode" value={stateCode} placeholder="Digite o código do estado" onChange={e => setStateCode(e.target.value)}/>
      <br/>

      <input ref={ipregister} id="stateAbbreviator" name="stateAbbreviator" type="stateAbbreviator" value={stateAbbreviator} placeholder="Digite a sigla do estado" onChange={e => setStateAbbreviator(e.target.value)}/>
      <br/>

      <textarea ref={ipregister} id="note" name="note" type="note" rows = "4" cols = "50" value={note} placeholder="Observações" onChange={e => setNote(e.target.value)}/>
      <br/>

      <h2 className="mapTitle">Mapa:</h2>
      <br/>

      <input ref={ipregister} id="image" type="file" name="image" accept="image/*,video/*" value={map} onChange={e => setMap(e.target.value)}/>
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
