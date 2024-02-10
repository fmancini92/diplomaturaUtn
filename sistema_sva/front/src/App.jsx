import './App.css';

import ComponenteMostrarSaldos from './pages/MostrarSaldos';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ComponenteCrearSaldo } from './pages/CrearSaldo';
import { ComponenteCobrarSaldo } from './pages/CobrarSaldo';
import Login from './pages/login';
import { Admin } from './pages/Admin'
import { Administracion } from './pages/Administracion'
import { Reparto } from './pages/Reparto'
import { Ventas } from './pages/Ventas'
import { CrearUsuario } from './pages/usuarios/createUsers'
import { EditarUsuario } from './pages/usuarios/editUser.js'
import { MostrarUsuarios } from './pages/usuarios/mostrarUsuarios'
import MenuLogged from './componentes/menuLogged';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('');

  /* useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []); */

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('usuario');
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* Condición para renderizar MenuLogged si hay un usuario almacenado */}
        {user && <MenuLogged user={user} logout={logout} />}
        <Routes>
          {/* Ruta para el inicio de sesión */}
          <Route path='/login' element={<Login setUser={setUser} />} />

          {/* Resto de las rutas */}
          <Route path='/saldos' element={<ComponenteMostrarSaldos />} />
          <Route path='/nuevo' element={<ComponenteCrearSaldo />} />
          <Route path='/cobrar/:id' element={<ComponenteCobrarSaldo />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Administracion' element={<Administracion />} />
          <Route path='/Reparto' element={<Reparto />} />
          <Route path='/Ventas' element={<Ventas />} />
          <Route path='/usuarios' element={<MostrarUsuarios />} />
          <Route path='/editarUsuario/:id' element={<EditarUsuario />} />
          <Route path='/crearUsuario' element={<CrearUsuario />} />

          {/* Redirección a la página de inicio si no hay usuario almacenado */}
          {!user && <Route path='/*' element={<Navigate to="/login" />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
