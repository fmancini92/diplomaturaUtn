import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URIcuentas = 'http://localhost:8000/cuentas/'
const URIclientes = 'http://localhost:8000/clientes/'


export const ComponenteEditarSaldo = () => {
    const { id } = useParams()

    // valores que se van a pasar al actualizar - valores ingresados por form
    const [numrem, setNumRem] = useState(0)
    const [totalrem, setTotalRem] = useState(0)
    const [zona, setZona] = useState(0)
    const [efectivo, setEfectivo] = useState(0)
    const [transferencia, setTransferencia] = useState(0)
    const navigate = useNavigate()

    // guardo clientes y opciones del select
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState('')

    // obtengo datos de la cuenta con el ID
    const getCuentaById = useCallback(async () => {
        try {
            const res = await axios.get(URIcuentas + id)
            setNumRem(res.data.num_rem)
            setTotalRem(res.data.total_rem)
            setZona(res.data.zona)
        } catch (error) {
            console.error('Error:', error);
        }
    }, [id])

    //consulto clientes para el select
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

    // actualizar Saldo
    const actualizarSaldo = async (e) => {
        const saldo = totalrem - efectivo - transferencia
        e.preventDefault()
        try {
            if (saldo > 0) {
                await axios.put(URIcuentas + id, {
                    codcliente: selectedOption,
                    num_rem: numrem,
                    total_rem: totalrem,
                    zona: zona,
                    saldo: saldo,
                    anulado: 0
                })
                alert('Registro actualizado correctamente !')
                navigate('/saldos')
            } else {
                alert('Saldo NEGATIVO !')
            }
        } catch (error) {
            console.error('Error:', error);
            navigate('/saldos')
        }
    }

    //llamo las a las funciones necesarias al cargar el componente
    useEffect(() => {
        getCuentaById()
        getClientes()
    }, [getCuentaById])

    // vista
    return (
        <div>
            <h2>Editar Saldo</h2>
            <form onSubmit={actualizarSaldo} >
                <div className="mb-3 form-control">
                    <div>
                        <label className="form-label">Cliente</label>
                        <select
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}>
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
                            onChange={(e) =>
                                setNumRem(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div>
                        <label>Total de Remito</label>
                        <input value={totalrem} onChange={(e) => setTotalRem(e.target.value)} className="form-control"
                        />
                    </div>

                    <div>
                        <label >Zona</label>
                        <input value={zona} onChange={(e) => setZona(e.target.value)} className="form-control"
                        />
                    </div>

                    <div>
                        <label>Efectivo</label>
                        <input value={efectivo} onChange={(e) => setEfectivo(e.target.value)} className="form-control"
                        />
                    </div>

                    <div>
                        <label>Tranferencia</label>
                        <input value={transferencia} onChange={(e) => setTransferencia(e.target.value)} className="form-control"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Store</button>


                </div>
            </form>


        </div>
    )

}
