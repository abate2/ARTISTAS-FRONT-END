import './App.css';

import InicioPagina from './paginas/InicioPagina.js';
import ContactoPagina from './paginas/Contacto.Pagina.js';
import ArtistasPagina from './paginas/ArtistasPagina.js';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from "./componentes/Menu.js"
import Footer from './footer.js';
import Sidebar from './sidebar.js';


function App() {
  return (
    <>
      <Router>
        <Menu/>

        <div className="container pt-5 mt-5">

          
          <Routes>
            <Route path='/' element={<InicioPagina />} /> {/*here we establish the path(could be anything that  we want to write) to comunicate with the element that will call the component*/}
            <Route path='/contacto' element={<ContactoPagina />} />
            <Route path='/artistas' element={<ArtistasPagina />}/>
          </Routes>
      

          <Footer contact="Juanito" phone="123456789" email="emailDeEjemplo@juanito.com" city="Bogota" year="2024"/>
        </div>
      </Router>
    </>
  );
}

export default App;

