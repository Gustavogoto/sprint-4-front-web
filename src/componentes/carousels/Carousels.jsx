import { } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "../carousels/styles/carousels.css"
import Carro1 from '../../imagens/carro1.png'
import Carro2 from '../../imagens/carro2.png'
import Carro3 from '../../imagens/carro3.png'
import Carro4 from '../../imagens/carro4.png'
import Carro5 from '../../imagens/carro5.png'


function Carousels() {

  return (
    <div>
  <Carousel >
        <Carousel.Item id='carrossel'>
          <div className='carrousels.img'>      
            <img className='imagens_carro' src={Carro1} alt='placa' />
          </div>

        </Carousel.Item>
        <Carousel.Item>
        <div className='carrousels.img'>      
          <img className='imagens_carro' src={Carro2} alt='placa' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrousels.img'>      
          <img className='imagens_carro' src={Carro3} alt='placa' /> 
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrousels.img'>      
          <img className='imagens_carro' src={Carro4} alt='placa' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='carrousels.img'>      
          <img className='imagens_carro' src={Carro5} alt='placa' />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;