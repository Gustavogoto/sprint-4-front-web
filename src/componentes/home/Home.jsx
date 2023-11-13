import { } from "react";
import Carrousels from "../carousels/Carousels"
import "../home/styles/home.css"
import Body from "../Body/body";
import Kit from '../../imagens/kit.png'
import Acessorio from '../../imagens/acessorio.png'
import Inversor from '../../imagens/inversor.png'


const Home = () => (
  <div className="Home">
    <div className="fundo-home">

    </div>
    <div id="home">
      <h1 id="titulo-home">IMSAC</h1>
      <h2 id="titulo-sub">Especialista em Energia Solar Fotovoltaica</h2>
      <h4 id="opcao-titulo">Categorias</h4>
      <section id="menu_home">
        <div className='opcao-img'>
          <img className='imagenss' src={Kit} alt='placa' />
          <h5 id="opcao-itens">Kits Completos</h5>
        </div>      
        <div className='opcao-img'>
          <img className='imagenss' src={Acessorio} alt='placa' />
          <h5 id="opcao-itens"> Acessórios </h5>
        </div>      
        <div className='opcao-img'>
          <img className='imagenss' src={Inversor} alt='placa' />
          <h5 id="opcao-itens">Inversores</h5>
        </div>       
      </section>

      <div className="projetos">
        <h4 id="txt_projetos">Projetos</h4>
        <div className="Carrousels">
          <Carrousels />
        </div>
        <p id="txt_carro">Alguns dos nossos mais renomados projetos</p>
      </div>
      <Body />
    </div>
  </div>
);

export default Home;