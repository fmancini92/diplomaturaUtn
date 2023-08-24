import './App.css';

import ComponenteMostrarSaldos  from './pages/MostrarSaldos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponenteCrearSaldo } from './pages/CrearSaldo';
import { ComponenteEditarSaldo } from './pages/EditarSaldo';
import { ComponenteCobrarSaldo } from './pages/CobrarSaldo';
import Header from '../src/componentes/layout/Header'
import Nav from '../src/componentes/layout/Nav';



function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav/>
        <Routes>
          {/* <Route path='/' element={<}/> */}
          <Route path='/mostrar' element={<ComponenteMostrarSaldos></ComponenteMostrarSaldos>}/>
          <Route path='/nuevo' element={<ComponenteCrearSaldo></ComponenteCrearSaldo>}/>
          <Route path='/editar/:id' element={<ComponenteEditarSaldo></ComponenteEditarSaldo>}/>
          <Route path='/cobrar/:id' element={<ComponenteCobrarSaldo></ComponenteCobrarSaldo>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
