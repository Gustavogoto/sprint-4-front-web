import {} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './componentes/footer/Footer'
import Home from './componentes/home/Home'
import Quem_somos from './componentes/quem _somos/Quem_somos'
import ColorSchemesExample from './componentes/nav/Nav'
import Carousels from './componentes/carousels/Carousels'
import Como_funciona from './componentes/como_funciona/Como_funciona'
import Body from './componentes/Body/body'
import Formulario from './componentes/Formulario/formulario'
import Calculo from './componentes/Calculo1/Calculo'





function App() {

  return (
    <div className='App'>
        <BrowserRouter>
          <ColorSchemesExample/>
            <Routes>
              <Route path='/' element = {<Home/>}/>
              <Route path='/footer' element = {<Footer/>}></Route>
              <Route path='/carousels' element = {<Carousels/>}></Route>
              <Route path='/Como_funciona' element = {<Como_funciona/>}></Route>
              <Route path='/quem_somos' element = {<Quem_somos/>}></Route>
              <Route path='/Body' element = {<Body/>}></Route>
              <Route path='/Formulario' element = {<Formulario/>}></Route>
              <Route path='/Calculo' element = {<Calculo/>}></Route>
              
            </Routes>
        </BrowserRouter>
        <Footer/>
        
      </div>
  )
}

export default App


