import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const NavBar = ({ user, logout }) => {
    return (
        <>
            {user && (
                <nav className="menu">
                    {user.id_cargo === 1 && (
                        <>
                            <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/admin">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/usuarios">Usuarios</NavLink>
                        </>
                    )}
                    {(user.id_cargo === 2 || user.id_cargo === 4) && (
                        <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/reparto" >Home</NavLink>
                    )}
                    {user.id_cargo === 3 && (
                        <>
                            <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/administracion">Home</NavLink>  
                            <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/usuarios">Usuarios</NavLink>
                        </>
                    )}
                    <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/login" onClick={logout}>Salir</NavLink>
                </nav>
            )}
        </>
    );
}

export default NavBar;
