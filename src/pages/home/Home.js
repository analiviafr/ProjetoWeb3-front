import React from 'react';
import {Link} from 'react-router-dom';
import './styles/tela_grande.css';
import './styles/tela_media.css';
import './styles/tela_media_menor.css';
import './styles/tela_pequena_mobile.css';
import './styles/tela_pequena_tablet.css';
import appleIcon from './img/Appleicon.PNG';
import googleIcon from './img/Googleicon.PNG';
import icon from './img/icon.png';
import img3 from './img/img3.png';
import img3_mobile from './img/img3_mobile.png';
import img4 from './img/img4.png';
import img5 from './img/img5.png';
import img6 from './img/img6.png';
import img7 from './img/img7.png';
import img8 from './img/img8.png';
import img12 from './img/img12.jpg';
import logo from './img/logo.png';
import logo2 from './img/logo2.png';

class Home extends React.Component{
  render(){
    return (
      <div>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width"/>
          <link rel="shortcut icon" href={icon} type="image/x-icon"/>
          <title>Nubank - Finalmente você no controle do seu dinheiro</title>
          <meta name="description" content="Você finalmente no controle do seu dinheiro. Controle total do cartão de crédito e da conta 100% digital"/>
          <div className="design_responsivo"/>

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

                    <div className="Login">

                        <div className="bt_login">
                            <Link to="/login">Login ➜]</Link>
                        </div>

                        <div className="bt_querosernu">
                            <Link to="/register">Quero ser Nubank</Link>
                        </div>

                        <div className="bt_elementos">
                            <Link to="/login">=</Link>
                        </div>
                    </div>
                </nav>

            <header>
                <div className="conteiner">
                    <aside className="cont-esquerdo">
                        <div className="cabecalho">
                            <h1 className="titulo1">Ser Nubank é <br></br> reinventar sua vida <br></br> financeira</h1>
                            <h2 className="subtitulo1">Conta com rendimento acima <br></br> da poupança, cartão de crédito <br></br> sem anuidade e o melhor: <br></br> resolva tudo pelo app</h2>
                            <Link className="botao" to="/register">Quero ser Nubank</Link>
                        </div>
                    </aside>
                    <figure className="cont-direito">
                        <img src={img3}/>
                    </figure>
                    <figure className="cont-direito-mobile">
                        <img src={img3_mobile}/>
                    </figure>
                </div>
            </header>

            <section className="fundo_S1">
                <div className="conteiner2">
                    <aside className="titulo2">
                        <h1><span><a href="">Conta do Nubank</a></span><br></br>Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil.</h1>
                        <a href="">Segura e sem complicações &#129109;</a>
                    </aside>

                    <figure className="figura2">
                        <img src={img4}/>
                    </figure>
                </div>
            </section>

            <section className="fundo_S2">
                <div className="conteiner3">
                    <aside className="titulo3">
                        <h1><span><a href="">Cartão de Crédito</a></span><br></br>Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também.</h1>
                        <a href="">Saiba mais &#129106;</a>
                    </aside>

                    <figure className="figura3">
                        <img src={img5}/>
                    </figure>
                </div>
            </section>

            <section className="fundo_S3">
                <div className="conteiner4">
                    <aside className="titulo4">
                        <h1><a href=""><span>Rewards</span></a><br></br>Um programa de pontos justo e fácil de usar.</h1>
                        <a href="">Saiba mais &#129109;</a>
                    </aside>

                    <figure className="figura4">
                        <img src={img6}/>
                    </figure>
                </div>
            </section>

            <section className="fundo_S4">
                <div className="camada_de_cor">
                    <div className="conteiner5">
                        <aside className="titulo5">
                            <h1>Reinvantando a relação das pessoas com o dinheiro</h1>
                            <a href="">É nisso que acreditamos &#129106;</a>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="fundo_S5">
                <div className="fundo_de_cor2">
                    <div className="conteiner6">
                        <aside className="titulo6">
                            <h1><span>NuCommunity</span><br></br><br></br>A comunidade oficial do Nubank</h1>
                            <a href="#">Tire dúvidas, compartilhe idéias e faça parte &#129109;</a>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="fundo_S6">
                <div className="conteiner7">
                    <aside className="titulo7">
                        <h1>Um blog para você repensar o seu dinheiro</h1>
                        <a href="">Conheça o Fala, Nubank &#129109;</a>
                    </aside>
                </div>
            </section>

            <footer>
                <div className="conteiner8">
                    <div className="bloco">
                        <h3>Nubank</h3>
                        <a href="">Sobre nós</a><br></br>
                        <a href="">Carreiras</a><br></br>
                        <a href="">Perguntas frequentes</a><br></br>
                        <a href="">Contato</a><br></br>
                        <a href="">Imprensa</a><br></br>
                    </div>

                    <div className="bloco">
                        <h3>Produtos</h3>
                        <a href="">Conta digital</a><br></br>
                        <a href="">Cartão de crédito</a><br></br>
                        <a href="">Rewards</a><br></br>
                        <a href="">Empréstimo</a><br></br>
                        <a href="">Conta PJ</a><br></br>
                    </div>

                    <div className="bloco">
                        <h3>Explore</h3>
                        <a href="">comunidade</a><br></br>
                        <a href="">Blog</a><br></br>
                        <a href="">Newsletter</a><br></br>
                    </div>

                    <div className="bloco">
                        <h3>Pelo mundo</h3>
                        <a href="">México</a><br></br>
                        <a href="">Argentina</a><br></br>
                    </div>

                    <div className="bloco">
                        <h3>Transparência</h3>
                        <a href="">Politica de Privacidade</a><br></br>
                        <a href="">Politica de Compliance</a><br></br>
                        <a href="">Contatos</a><br></br>
                        <a href="">Politicas de Segurança</a><br></br>
                        <a href="">Demonstrações Financeiras</a><br></br>
                        <a href="">Ética & Compliance</a><br></br>
                        <a href="">Dados Abertos</a><br></br>
                        <a href="">SCR</a><br></br>
                    </div>

                    <div className="bloco">
                        <h3>Ouvidoria</h3>
                        <a href="">0800 887 0463</a><br></br>
                        <a href="">ouvidoria@nubank.com.br</a><br></br>
                        <p>Atendimento das 9h às 18h (dias úteis)</p><br></br>
                    </div>

                    <div className="bloco">
                        <br></br>
                        <h3>Fale com a gente</h3>
                        <a href="">0800 608 6236</a><br></br>
                        <a href="">meajuda@nubank.com.br</a><br></br>
                        <p>Atendimento 24h</p><br></br>
                    </div>

                    <div className="bloco">
                        <h3>Baixe o APP</h3>
                            <a href=""><img src={appleIcon}/></a><br></br>
                            <a href=""><img src={googleIcon}/></a>
                    </div>

                <div className="conteiner9">
                    <div className="caixa1">
                        <img src={logo2}/>
                        <p>Nu Pagamentos S.A. 18.236.120/0001-58 <br></br> Rua Capote Valente, 39 - São Paulo, SP - 05409-000</p>
                    </div>

                    <div className="caixa2">
                        <a href="">f</a>
                        <a href="">o</a>
                        <a href="">in</a>
                        <a href="">►</a>
                        <a href="">T</a>
                    </div>
                </div>

                <div className="conteiner10">
                    <div className="caixa3">
                        <a href="#">
                            <input type="radio" name="Português"></input>
                            <label>Português</label>
                        </a>
                        <a href="#">
                            <input type="radio" name="English"></input>
                            <label>English</label>
                        </a>
                    </div>
                </div>
                </div>
            </footer>
      </div>
    );
  }
}

export default Home;
