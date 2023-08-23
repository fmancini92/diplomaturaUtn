import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

const URIcuentas = 'http://localhost:8000/cuentas/'
const URIclientes = 'http://localhost:8000/clientes/'

export const ComponenteCrearSaldo = () => {

    const [numrem, setNumrem] = useState(0)
    const [totalrem, setTotalRem] = useState(0)
    const [zona, setZona] = useState(0)
    const [efectivo, setEfectivo] = useState(0)
    const [transferencia, setTransferencia] = useState(0)
    const navigate = useNavigate()

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('')

    // obtengo el listado de clientes para el select del form
    const getClientes = async () => {
        await axios.get(URIclientes)
            .then(response => {
                setOptions(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    // crear saldo nuevo
    const CrearSaldo = async (e) => {
        e.preventDefault();
        const saldo = totalrem - efectivo - transferencia;
        try {
            await axios.post(URIcuentas,
                {
                    codcliente: selectedOption,
                    num_rem: numrem,
                    total_rem: totalrem,
                    zona: zona,
                    saldo: saldo,
                    anulado: 0
                })
            navigate('/')
        } catch (error) {
        }
    }

    // llamo las a las funciones necesarias al cargar el componente
    useEffect(() => {
        getClientes()
    }, [])



    return (
        <div className="form">
            <h2>Crear Nuevo Saldo</h2>
            <form onSubmit={CrearSaldo} className="formulario">
                <div>
                    <div>
                        <label className="form-label">Cliente</label>
                        <select onChange={(e) => setSelectedOption(e.target.value)}>
                            <option>Selecciona un cliente</option>
                            {options.map(option => (
                                <option key={option.id} value={option.id}>
                                    {option.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>N° de Remito</label>
                        <input
                            value={numrem}
                            onChange={(e) => setNumrem(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label >Total de Remito</label>
                        <input
                            value={totalrem}
                            onChange={(e) => setTotalRem(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label >Zona</label>
                        <input
                            value={zona}
                            onChange={(e) => setZona(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label >Efectivo</label>
                        <input
                            value={efectivo}
                            onChange={(e) => setEfectivo(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label >Transferencia</label>
                        <input
                            value={transferencia}
                            onChange={(e) => setTransferencia(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Cargar</button>
                </div>
            </form>
        </div>

    )
}

