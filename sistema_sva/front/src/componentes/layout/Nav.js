import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li>
                        <NavLink to="/saldos" className={ ({ isActive }) => isActive ? "activo" : undefined }> Home </NavLink>
                        <NavLink to="http://localhost:8000/logout" className={ ({ isActive }) => isActive ? "activo" : undefined }> Salir </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;