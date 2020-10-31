import React, {useState} from 'react';
import kwelo from '../../Kwelo';
import './styles/tela_search_grande.css';
import './styles/tela_search_media.css';
import './styles/tela_search_pequena.css';
import logo from './img/logo.png';

function Search() {

  const [ip,setIp] = useState(''); //seta estado inicial vazio para todos
  const [cidade,setCidade] = useState('');
  const [continente,setContinente] = useState('');
  const [pais,setPais] = useState('');
  const [raio,setRaio] = useState('');
  const [latitude,setLatitude] = useState('');
  const [longitude,setLongitude] = useState('');
  const [timeZone,setTimeZone] = useState('');
  const [postal,setPostal] = useState('');
  const [codPais,setCodPais] = useState('');
  const [isoPais,setIsoPais] = useState('');
  const [codEstado,setCodEstado] = useState('');
  const [isoEstado,setIsoEstado] = useState('');
  const [insert,setInsert] = useState('');
  const [setFlag] = useState('');

  async function envia(evento){
      evento.preventDefault(); //não deixa que a página seja recarregada após o envio da requisição
      setIp(''); //zera osestados caso não seja a primeira requisição
      setCidade('');
      setContinente('');
      setPais('');
      setRaio('');
      setLatitude('');
      setLongitude('');
      setTimeZone('');
      setPostal('');
      setCodPais('');
      setIsoPais('');
      setCodEstado('');
      setIsoEstado('');
      var i = 0; //cria uma variável para auxiliar na leitura da string obtida
      for(var c=0;c<insert.length;c++){ //percorre a string obtida
        const numero = /[0-9]/; //cria uma constante para checar se há números na string
        const letra = /^[a-zA-Zéüöêåø]*$/; //cria uma constante para checar se há letras na string
        if(letra.test(insert[c])){ //testa se o caracter da string é uma letra
          i = 1; //se sim, atribui valor 1 a variável i
        }
        else if(numero.test(insert[c])){ //testa se o caracter da string é um número
          if(i==1){ //se i tiver valor 1 é porque há caracteres na string, logo, a string não é válida
            break;
          }
          else{
            i = 2; //caso i seja 0 é porque não há caracteres na string, logo, ela continua potencialmente válida
          }
        }
        else if(c+1==insert.length && insert[c]=='.'){ //números ips não podem terminar com ., logo, atribui o valor 3 a variável i para tratar essa string inválida
          if(i==2){ //confere se já há números na string, se sim, é atribuído o valor 3 para tratar um erro de último caracter
            i = 3;
          }
          else{ //se não, atribui o valor 1, como string inválida, pois ou a string é apenas um . ou está misturada com outros caracteres
            i = 1;
          }
        }
        else if(insert[c]!='.'){ //verifica se o caracter não reconhecido como letra ou número é um ponto, caso contrário, atrivui valor 1 para a variável i, pois a string é inválida
          i = 1;
        }
      }
      if(insert==""){ //verifica se há algum valor no campo busca
        alert("Por favor, insira um IP no campo de busca!");
      }
      else if(i==3){
        alert("O último caracter não pode ser '.'!");
        setInsert(''); //limpa o campo de texto
      }
      else if(insert==parseInt(insert,10)){ //verifica se há apenas números no campo busca (é necessário números e pontos)
        alert("É necessário incluir os '.' no endereço IP!");
        setInsert(''); //limpa o campo de texto
      }
      else if(i==1){ //se i for 1 é porque há apenas caracteres ou caracteres misturados com números na string, logo, ela não é válida
        alert("Por favor, insira apenas números e '.' no campo de busca!");
        setInsert(''); //limpa o campo de texto
      }
      else{
        try{
          const json = await kwelo.get(`https://api.kwelo.com/v1/network/ip-address/location/${insert}`);
          setIp(json.data.data.ip_address); //atualiza o estado para o valor recebido pela requisição
          setCidade(json.data.data.geolocation.city.names.en);
          setContinente(json.data.data.geolocation.continent.names["pt-BR"]);
          setPais(json.data.data.geolocation.country.names["pt-BR"]);
          setRaio(json.data.data.geolocation.location.accuracy_radius);
          setLatitude(json.data.data.geolocation.location.latitude);
          setLongitude(json.data.data.geolocation.location.longitude);
          setTimeZone(json.data.data.geolocation.location.time_zone);
          setPostal(json.data.data.geolocation.postal.code);
          setCodPais(json.data.data.geolocation.registered_country.geoname_id);
          setIsoPais(json.data.data.geolocation.registered_country.iso_code);
          setCodEstado(json.data.data.geolocation.subdivisions[0].geoname_id);
          setIsoEstado(json.data.data.geolocation.subdivisions[0].iso_code);
      }catch(erro){
          alert("IP inválido!");
      }
      setInsert(''); //limpa o campo de texto
    }
  }

  function logOut(){
    localStorage.clear();
    alert("Usuário deslogado com sucesso!");
    window.location = '/ProjetoWeb2/#/';
  }

  return(
    <div>
    <nav>
        <div className="menu">
            <div className="logo">
                <a href="#"><img src={logo}/></a>
            </div>
              <ul>
                  <li><a href=""><span>Início</span></a></li>
                  <li><a href="">Conta digital</a></li>
                  <li><a href="">Cartão de crédito</a></li>
                  <li><a href="">Rewards</a></li>
                  <li><a href="">Empréstimo</a></li>
                  <li><a href="">Conta PJ</a></li>
                  <li><a href="">Sobre nós</a></li>
                  <li><a href="">Carreiras</a></li>
              </ul>
        </div>
          <div className="LoginBusca">
              <div className="bt_loginb">
                  <a onClick={logOut}>Logout [➜</a>
              </div>
          </div>
      </nav>
      <header>
        <h1 className="tituloBusca">Localize um endereço IP:</h1>
        <br/>
        <div className="form">
          <form onSubmit={envia}>
            <input
              id = "ip"
              type = "text"
              value = {insert}
              placeholder = "Apenas números e pontos"
              onChange = {evento => setInsert(evento.target.value)}
             />
            <button className="enviaButton" type="submit">Buscar</button>
          </form>
        </div>
        {
          ip &&
          <div className="resultado">
              <p><span>IP: {ip}</span></p>
              <p><span>Cidade: {cidade}</span></p>
              <p><span>Continente: {continente}</span></p>
              <p><span>País: {pais}</span></p>
              <p><span>Latitude: {latitude}</span></p>
              <p><span>Longitude: {longitude}</span></p>
              <p><span>Fuso horário: {timeZone}</span></p>
              <p><span>Raio de precisão: {raio}</span></p>
              <p><span>Código postal: {postal}</span></p>
              <p><span>Código do país: {codPais}</span></p>
              <p><span>Sigla do país: {isoPais}</span></p>
              <p><span>Código do estado: {codEstado}</span></p>
              <p><span>Sigla do estado: {isoEstado}</span></p>
          </div>
        }
      </header>
    </div>
  );
}

export default Search;
