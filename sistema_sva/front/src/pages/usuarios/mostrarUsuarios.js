import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/usuarios/';


export const MostrarUsuarios = () => {
    const [Users, setUser] = useState([])
    console.log(Users)
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const res = await axios.get(URI)
        setUser(res.data)
    }
    const deleteUsers = async (id) => {
        axios.delete(`${URI}${id}`);
        alert('Usuario Eliminado');
        getUsers();
    
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-lx-12">

                        <h1>Usuarios</h1>
                        <Link to="/createUsers" className='btn btn-success mt-2 mb-2'><i className="fa-solid fa-user-plus"></i>Crear Usuario</Link>
                        <table className="table">
                            <thead className='table-primary'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Id Cargo</th>
                                    <th scope="col">Cod Sistema</th>
                                    <th scope="col">Zona</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                { Users.map(user =>(
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.nombre}</td>
                                        <td>{user.usuario}</td>
                                        <td>{user.password}</td>
                                        <td>{user.id_cargo}</td>
                                        <td>{user.codsistema}</td>
                                        <td>{user.zona}</td>
                                        <td><Link to={`/editarUsuario/${user.id}`}className='btn btn-primary'><i className="fa-solid fa-user-pen"></i>Editar</Link>
                                            <button onClick={()=>deleteUsers(user.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button></td>
                                    </tr>
                                ))

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
