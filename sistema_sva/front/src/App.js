import './App.css';

import ComponenteMostrarSaldos  from './pages/MostrarSaldos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponenteCrearSaldo } from './pages/CrearSaldo';
import { ComponenteEditarSaldo } from './pages/EditarSaldo';
import { ComponenteCobrarSaldo } from './pages/CobrarSaldo';
import Header from './componentes/layout/Header';
import Nav from '../src/componentes/layout/Nav';
import Footer from '../src/componentes/layout/Footer'


function App() {
  return (
    <div className="App">
      
      <Header />

      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<ComponenteMostrarSaldos></ComponenteMostrarSaldos>}/>
          <Route path='/nuevo' element={<ComponenteCrearSaldo></ComponenteCrearSaldo>}/>
          <Route path='/editar/:id' element={<ComponenteEditarSaldo></ComponenteEditarSaldo>}/>
          <Route path='/cobrar/:id' element={<ComponenteCobrarSaldo></ComponenteCobrarSaldo>}/>
          
        </Routes>
      </BrowserRouter>
            
      <Footer/>
    </div>
  );
}

export default App;
