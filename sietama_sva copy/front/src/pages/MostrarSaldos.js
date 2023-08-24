import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/cuentas/'

const ComponenteMostrarSaldos = () => {

    const [saldos, setSaldos] = useState([])

    // obtengo todos los saldos
    const mostrarSaldos = async () => {
        const res = await axios.get(URI)
        setSaldos(res.data)
        console.log(res.data);
    }
    
    // borro saldo del listado
    const borrarSaldo = async (id) => {
        try {
            await axios.delete(`${URI}${id}`)
            mostrarSaldos()
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    // llamo las a las funciones necesarias al cargar el componente
    useEffect(() => {
        mostrarSaldos()
    }, [])

    // vista
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/nuevo' className='btn btn-primary mt-2 mb-2'>Nuevo Saldo <i class="fa-solid fa-square-plus fa-xl"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Cliente</th>
                                <th>Saldo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {saldos.map((saldo) => (
                                <tr key={saldo.id}>
                                    <td>{saldo.id}</td>
                                    <td>{saldo.fecha}</td>
                                    <td>{saldo.cliente.nombre}</td>
                                    <td>{saldo.saldo}</td>
                                    <td>
                                        <Link to={`/editar/${saldo.id}`} className='btn btn-info'><i class="fa-solid fa-pen-to-square"></i> </Link>
                                        <button onClick={() => borrarSaldo(saldo.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                                        <Link to={`/cobrar/${saldo.id}`} className='btn btn-info'> Cobrar <i class="fa-solid fa-sack-dollar"></i> </Link>
                                    </td>

                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>

    )


}

export default ComponenteMostrarSaldos