import {} from 'react'
import "../Body/styles/body.css"
import imagem1 from '../../imagens/imagem1.png'
import imagem2 from '../../imagens/imagem2.png'
import imagem3 from '../../imagens/imagem3.png'
import imagem4 from '../../imagens/imagem4.png'


function Body() {

  return (
    <>
      <section className="Beneficios">
        <div className='fundo_titulo'>
          <h2 id="beneficios-titulo">Benefícios da Energia Solar:</h2>
          <p id="beneficios-paragrafo">Com as placas fotovoltaicas, gere a sua própria energia elétrica sem impactar o meio ambiente, e ainda economize até 95% na conta de energia de luz da sua casa, comércio ou indústria. Além disso, os painéis solares podem valorizar o seu imóvel em até 15% e o projeto se paga totalmente em cerca de 6 anos. Em algumas cidades, ainda há o IPTU verde, um desconto no IPTU do imóvei para incentivo às práticas sustentáveis.</p>
        </div>

        <div className="Beneficios-topicos">
          <h4 id="beneficios-titulo-topico">Geração de energia limpa</h4>
          <p id="beneficios-paragrafo">A energia solar é 100% limpa, sem emissão de quaisquer poluentes ou que cause danos ao meio ambiente.</p>
          <div className='beneficios-imagem'>
            <img id='img_beneficios' src={imagem1} alt='imagem 1'/>
          </div>
          <h4 id="beneficios-titulo-topico">Economia e retorno de investimento</h4>
          <p id="beneficios-paragrafo">Seu sistema solar se paga um período de 3 a 5 anos.</p>
          <div className='beneficios-imagem'>
            <img id='img_beneficios' src={imagem2} alt='imagem 2'/>
          </div>
          <h4 id="beneficios-titulo-topico">Elevada Vida útil</h4>
          <p id="beneficios-paragrafo">com uma necessidade mínima de manutenção, as placas solares têm durabilidade de mais de 20 anos.</p>
          <div className='beneficios-imagem'>
            <img id='img_beneficios' src={imagem3} alt='imagem 3'/>
          </div>
          <h4 id="beneficios-titulo-topico">Valorização do imóvel</h4>
          <p id="beneficios-paragrafo">As placas solares valorizam o imóvel, principalmente por ter desconto em IPTU e não gastar com energia.</p>
          <div className='beneficios-imagem'>
            <img id='img_beneficios' src={imagem4} alt='imagem 4'/>
          </div>
        </div>
        <div className="jumbotron">
          <a className="btn btn-primary btn-lg" href="/Como_funciona" role="button">Ler Mais</a>
        </div>
      </section>
    </>

  )
}

export default Body