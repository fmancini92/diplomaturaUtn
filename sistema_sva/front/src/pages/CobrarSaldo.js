import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URIcuentas = 'http://localhost:8000/cuentas/'

export const ComponenteCobrarSaldo = () => {
    const { id } = useParams()

    const [saldo, setSaldo] = useState(0)
    const [efectivo, setEfectivo] = useState(0)
    const [transferencia, setTransferencia] = useState(0)

    const navigate = useNavigate()

    const [cuentas, setCuentas] = useState([])
    /* console.log(cuentas); */


    //Obtener el saldo de la cuenta seleccionada
    const getSaldoById = useCallback(async () => {
        try {
            const res = await axios.get(URIcuentas + id)
            setSaldo(res.data.saldo)
            /* console.log(res.data); */

        } catch (error) {
            console.error('Error:', error);
        }
    }, [id])

    //Obtener las cuentas del usuario seleccionado
    const consultarDatosCuentas = async () => {
        const res = await axios.get(URIcuentas)
        setCuentas(res.data)
        /* console.log(res.data); */
    }

    // cobrar saldo; en el caso de que se cobre en totalidad se borra la cuenta
    const cobrarSaldo = async (e) => {
        const NvoSaldo = saldo - efectivo - transferencia
        e.preventDefault()
        if (NvoSaldo === 0) {
            try {
                await axios.delete(`${URIcuentas}${id}`)
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            try {
                await axios.put(URIcuentas + id, {
                    saldo: NvoSaldo
                })

            } catch (error) {
                console.error('Error:', error);
            }
        }
        navigate('/')
    }

    // llamo las a las funciones necesarias al cargar el componente
    useEffect(() => {
        getSaldoById()
        consultarDatosCuentas()
        /* cuentasFind() */


    }, [getSaldoById])

    // vista
    return (
        <div>
            <h2>Cobrar Saldo</h2>
            <form onSubmit={cobrarSaldo}>
                <div>
                    {cuentas.find(cuenta => cuenta.id === Number(id)) && (
                        <div>
                            <label>Nombre del cliente</label>
                            <input
                                type="text"
                                value={cuentas.find(cuenta => cuenta.id === Number(id)).cliente.nombre}
                                disabled
                            />
                        </div>
                    )}
                </div>

                <div>
                    <label>Saldo</label>
                    <input value={saldo} onChange={(e) => setSaldo(e.target.value)} className="form-control" disabled
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
            </form>
        </div>
    )

}