import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/usuarios/';

export const CrearUsuario = () => {

    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [id_cargo, setId_cargo] = useState([]);
    const [codsistema, setCodsistema] = useState([]);
    const [zona, setZona] = useState([]);
    const navigate = useNavigate();


    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { nombre: nombre, usuario: usuario, password: password, id_cargo: id_cargo, codsistema: codsistema, zona: zona })
        navigate('/usuarios');
    }
    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <h3 className="mt-3">Crear Usuarios</h3>
                    <form onSubmit={store}>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Nombre</label>
                            <input value={nombre} className="form-control" type="text" onChange={(e) => setNombre(e.target.value)} />
                            <label className="form-label">Usuario</label>
                            <input value={usuario} className="form-control" type="text" onChange={(e) => setUsuario(e.target.value)} />
                            <label className="form-label">Password</label>
                            <input value={password} className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <label className="form-label">Id_Cargo</label>
                            <input value={id_cargo} className="form-control" type="text" onChange={(e) => setId_cargo(e.target.value)} />
                            <label className="form-label">Cod Sistema</label>
                            <input value={codsistema} className="form-control" type="text" onChange={(e) => setCodsistema(e.target.value)} />
                            <label className="form-label">Zona</label>
                            <input value={zona} className="form-control" type="text" onChange={(e) => setZona(e.target.value)} />
                            <button type="submit" className="btn btn-success mt-2">Agregar Usuario</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>


    )



}


