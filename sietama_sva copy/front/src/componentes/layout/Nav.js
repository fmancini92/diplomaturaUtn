import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li>
                        <NavLink to="/" className={ ({ isActive }) => isActive ? "activo" : undefined }> Home </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;