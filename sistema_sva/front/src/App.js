import logo from './logo.svg';
import './App.css';

import ComponenteMostrarSaldos from './SaldosSva/MostrarSaldos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ComponenteCrearSaldo } from './SaldosSva/CrearSaldo';
import { ComponenteEditarSaldo } from './SaldosSva/EditarSaldo';
import { ComponenteCobrarSaldo } from './SaldosSva/CobrarSaldo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponenteMostrarSaldos></ComponenteMostrarSaldos>}/>
          <Route path='/nuevo' element={<ComponenteCrearSaldo></ComponenteCrearSaldo>}/>
          <Route path='/editar/:id' element={<ComponenteEditarSaldo></ComponenteEditarSaldo>}/>
          <Route path='/cobrar/:id' element={<ComponenteCobrarSaldo></ComponenteCobrarSaldo>}/>
          
        </Routes>
      </BrowserRouter>
            
      
    </div>
  );
}

export default App;
