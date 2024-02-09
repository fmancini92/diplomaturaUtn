import './App.css';

import ComponenteMostrarSaldos  from './pages/MostrarSaldos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponenteCrearSaldo } from './pages/CrearSaldo';
/* import { ComponenteEditarSaldo } from './pages/EditarSaldo'; */
import { ComponenteCobrarSaldo } from './pages/CobrarSaldo';
/* import Nav from '../src/componentes/layout/Nav'; */
import Login from './pages/login';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      
        <Routes>
          <Route path='/login' element= {<Login></Login>}></Route>
          <Route path='/saldos' element={<ComponenteMostrarSaldos></ComponenteMostrarSaldos>}/>
          <Route path='/nuevo' element={<ComponenteCrearSaldo></ComponenteCrearSaldo>}/>
          {/* <Route path='/editar/:id' element={<ComponenteEditarSaldo></ComponenteEditarSaldo>}/> */}
          <Route path='/cobrar/:id' element={<ComponenteCobrarSaldo></ComponenteCobrarSaldo>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
