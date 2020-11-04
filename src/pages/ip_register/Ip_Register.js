import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './Ip_Register.css';
import {useForm} from 'react-hook-form';

function IpRegister() {

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const{ register, handleSubmit } = useForm();

  const onSubmit = async(ipData) => {

    //Montando o formulário de envio de dados
    const formData = new FormData();

    formData.append("ip", ipData.ipr);
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
    formData.append("map", ipData.map[0]);
    formData.append("note", ipData.note);

    //Validação de campos obrigatórios vazios
    if(!ipData.ipr){
      setError('Por favor, preencha o campo de IP.');
      return;
    }
    if(!ipData.city){
      setError('Por favor, preencha o campo de cidade.');
      return;
    }
    if(!ipData.continent){
      setError('Por favor, preencha o campo de continente.');
      return;
    }
    if(!ipData.country){
      setError('Por favor, preencha o campo de país.');
      return;
    }
    if(!ipData.latitude){
      setError('Por favor, preencha o campo de latitude.');
      return;
    }
    if(!ipData.longitude){
      setError('Por favor, preencha o campo de longitude.');
      return;
    }
    if(!ipData.timezone){
      setError('Por favor, preencha o campo de fuso horário.');
      return;
    }
    if(!ipData.radius){
      setError('Por favor, preencha o campo de raio de precisão.');
      return;
    }
    if(!ipData.postal){
      setError('Por favor, preencha o campo de código postal.');
      return;
    }
    if(!ipData.countryCode){
      setError('Por favor, preencha o campo de código do país.');
      return;
    }
    if(!ipData.countryAbbreviator){
      setError('Por favor, preencha o campo de sigla do país.');
      return;
    }
    if(!ipData.stateCode){
      setError('Por favor, preencha o campo de código do estado.');
      return;
    }
    if(!ipData.stateAbbreviator){
      setError('Por favor, preencha o campo de sigla do estado.');
      return;
    }
    if(!ipData.map[0]){
      setError('Por favor, adicione um mapa.');
      return;
    }

    //Conectando com a API
    const response = await fetch(`${process.env.REACT_APP_API_URL}ip/ipregister`, {
        method: "POST",
        body: formData,
      }).then(response => response.json());
    if(response.status==true){
      setError('');
      setMessage('IP cadastrado com sucesso.');
      //limpa os campos de Cadastro
      setTimeout(() => {
        setMessage('');
        setError('');
        document.getElementById("form").reset();
      }, 3500);
    }
    else{
      setError('Houve um erro no cadastro. Tente novamente mais tarde.');
      //limpa os campos de Cadastro
      setTimeout(() => {
        setMessage('');
        setError('');
        document.getElementById("form").reset();
      }, 3500);
    }
  }

  return (
    <div className="IpRegister">
    <h1>Cadastro de IP:</h1>
    <form id="form" onSubmit={handleSubmit(onSubmit)}>

      <input ref={register} id="ipr" name="ipr" type="ipr" placeholder="Digite o IP"/>
      <br/>

      <input ref={register} id="city" name="city" type="city" placeholder="Digite o nome da cidade"/>
      <br/>

      <input ref={register} id="continent" name="continent" type="continent" placeholder="Digite o nome do continente"/>
      <br/>

      <input ref={register} id="country" name="country" type="country" placeholder="Digite o nome do país"/>
      <br/>

      <input ref={register} id="latitude" name="latitude" type="latitude" placeholder="Digite a latitude"/>
      <br/>

      <input ref={register} id="longitude" name="longitude" type="longitude" placeholder="Digite a longitude"/>
      <br/>

      <input ref={register} id="timezone" name="timezone" type="timezone" placeholder="Digite o fuso horário"/>
      <br/>

      <input ref={register} id="radius" name="radius" type="radius" placeholder="Digite o raio de precisão (apenas números - em km)"/>
      <br/>

      <input ref={register} id="postal" name="postal" type="postal" placeholder="Digite o código postal"/>
      <br/>

      <input ref={register} id="countryCode" name="countryCode" type="countryCode" placeholder="Digite o código do país"/>
      <br/>

      <input ref={register} id="countryAbbreviator" name="countryAbbreviator" type="countryAbbreviator" placeholder="Digite a sigla do país"/>
      <br/>

      <input ref={register} id="stateCode" name="stateCode" type="stateCode" placeholder="Digite o código do estado"/>
      <br/>

      <input ref={register} id="stateAbbreviator" name="stateAbbreviator" type="stateAbbreviator" placeholder="Digite a sigla do estado"/>
      <br/>

      <textarea ref={register} id="note" name="note" type="note" rows = "4" cols = "50" placeholder="Observações"/>
      <br/>

      <h2 className="mapTitle">Mapa:</h2>
      <br/>

      <input ref={register} id="image" type="file" name="map" accept="image/*,video/*"/>
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
