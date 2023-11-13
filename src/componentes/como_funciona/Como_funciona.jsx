import { } from 'react'
import "../como_funciona/styles/como_funciona.css"
import Como1 from '../../imagens/como1.png'
import Como2 from '../../imagens/como2.png'

function Como_funciona() {

   return (
      <div className='envolver'>
         <div className='body'>
            <div className='body-cabecalho'>
               <h1 id="body-titulo">Como funciona a Energia Solar</h1>
               <p id='body-sub'>Um sistema de geração de energia solar funciona convertendo a luz do sol em energia elétrica através de <b>painéis solares fotovoltaicos.</b>
                  Estes painéis consistem em células fotovoltaicas que convertem a irradiação do sol em corrente elétrica contínua.
                  Através de inversores, a corrente é então convertida em alternada, necessária para ser usada na rede elétrica doméstica.
                  Além dos painéis, um sistema de geração de energia solar também pode incluir baterias para armazenar a energia gerada durante o dia para ser usada à noite ou em momentos de baixa produção solar.</p>
            </div>
            <div className='body-img'>
               <img className='imagens' src={Como2} alt='placa' />
            </div>

            <div className='body-text'>
               <div id='container'>
                  <h5 id="body-text-titulo">Painel Fotovoltaico</h5>
                  <p id="body-text-paragrafo">O Painel Solar é responsável por converter a energia solar em energia elétrica de corrente contínua.</p>
               </div>
               <div id='container'>
                  <h5 id="body-text-titulo">Inversor</h5>
                  <p id="body-text-paragrafo">O Inversor é responsável por converter a corrente contínua em corrente alternada, desta forma, possibilitando a utilização em sua rede doméstica.</p>
               </div>
                  <div id='container'>
                  <h5 id="body-text-titulo">Medidor de Energia</h5>
                  <p id="body-text-paragrafo">Contabiliza a geração e o consumo para que a cobrança seja feita.</p>
               </div>
               <div id='container'>
                  <h5 id="body-text-titulo">Rede Elétrica</h5>
                  <p id="body-text-paragrafo">Armazena os créditos da geração e compensa o sistema quando não há geração solar.</p>
               </div>
            </div>
            <div className='body-img'>
               <img className='imagens' src={Como1} alt='placa' />
            </div>
            <div className='body-text2'>
               <h1 id="body-titulo2" >Uma placa solar, também conhecida como painel solar ou módulo fotovoltaico, é um dispositivo projetado para converter a luz solar em eletricidade. O processo pelo qual as placas solares funcionam pode ser dividido em várias etapas:</h1>
               <h5 id="body-text-titulo2">Absorção de Luz Solar</h5>
               <p id="body-text-paragrafo2">A superfície da placa solar é coberta por células fotovoltaicas, geralmente feitas de material semicondutor, como o silício. Quando a luz solar incide sobre essas células, fótons de luz são absorvidos pelo material semicondutor.</p>
               <h5 id="body-text-titulo2">Geração de Pares Elétron-Buraco</h5>
               <p id="body-text-paragrafo2">Quando os fótons de luz são absorvidos pelas células fotovoltaicas, eles fornecem energia suficiente para que elétrons em órbita ao redor dos átomos do material semicondutor se tornem excitados. Isso cria pares elétron-buraco, onde um elétron é liberado de sua órbita normal e fica livre para se mover.</p>
               <h5 id="body-text-titulo2">Movimento de Elétrons</h5>
               <p id="body-text-paragrafo2">Os elétrons excitados se movem através do material semicondutor sob a influência de um campo elétrico interno presente na estrutura da célula fotovoltaica. Isso cria uma corrente elétrica no circuito.</p>
               <h5 id="body-text-titulo2">Geração de Eletricidade</h5>
               <p id="body-text-paragrafo2">Quando os elétrons se movem através do material semicondutor e fluem através dos contatos elétricos na parte superior e inferior da célula, eles geram uma corrente elétrica. Essa corrente é a energia elétrica gerada pela placa solar.</p>
               <h5 id="body-text-titulo2">Conversão e Uso da Energia</h5>
               <p id="body-text-paragrafo2">A corrente elétrica gerada pela placa solar é uma corrente contínua (CC). Para uso doméstico e na maioria dos dispositivos eletrônicos, a corrente alternada (CA) é necessária. Portanto, um inversor é frequentemente usado para converter a corrente CC em corrente CA.</p>
               <h5 id="body-text-titulo2">Utilização e Armazenamento</h5>
               <p id="body-text-paragrafo2">A eletricidade gerada pelas placas solares pode ser usada diretamente para alimentar dispositivos eletroeletrônicos ou ser direcionada para a rede elétrica. Em sistemas de energia solar residencial, um componente importante é o medidor bidirecional, que registra a energia que flui para a rede elétrica quando a produção excede o consumo e a retira da rede quando a produção é insuficiente. Algumas instalações também usam sistemas de armazenamento de energia, como baterias, para armazenar o excesso de eletricidade para uso posterior.</p>

            </div>
            <div id='cont_final'>
               <i id='body-final'>*As placas solares funcionam através da absorção da luz solar por células fotovoltaicas, que gera uma corrente elétrica por meio do movimento de elétrons em um material semicondutor. Essa eletricidade é então convertida para a corrente alternada, utilizada pelos dispositivos elétricos, ou pode ser direcionada para a rede elétrica ou armazenada em baterias para uso posterior. O processo é limpo, renovável e uma fonte sustentável de energia.*</i>
            </div>
         </div>
      </div>
   )
}

export default Como_funciona