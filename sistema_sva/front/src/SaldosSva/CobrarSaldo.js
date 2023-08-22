import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URIcuentas = 'http://localhost:8000/cuentas/'

export const ComponenteCobrarSaldo = () => {
    const { id } = useParams()

    const [cliente, setCliente] = useState('')
    const [saldo, setSaldo] = useState(0)
    const [efectivo, setEfectivo] = useState(0)
    const [transferencia, setTransferencia] = useState(0)
    const navigate = useNavigate()

    const getSaldoById = useCallback(async () => {
        try {
            const res = await axios.get(URIcuentas + id)
            setCliente(res.data.nombre)
            setSaldo(res.data.saldo)
            console.log(res.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }, [id])


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

    useEffect(() => {
        getSaldoById()
    })

    return (
        <div>
            <h2>Cobrar Saldo</h2>
            <form onSubmit={cobrarSaldo}>
                <label>Nombre del cliente</label>
                <input type="text" value={cliente} disabled />
            </form>
        </div>
    )

}