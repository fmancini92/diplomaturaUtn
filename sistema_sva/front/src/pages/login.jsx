import axios from "axios"
import { useState, useContext } from "react"
import {UserContext}  from '../componentes/userContext.js';

const URI= 'http://localhost:8000/usuarios/'



export default function Login() {
    
    
    const [pass, setPass] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState(null);
    const { setUsuario } = useContext(UserContext);
    
    
    const getUser = async (e) => {
        e.preventDefault()
        setError(null); // Limpiar el error antes de hacer la solicitud
        try{

            //console.log(user, pass);
            const res = await axios.post(URI,{
                usuario: user,
                password: pass
            })
            setUsuario(res.data)
            //console.log(res.data);
        } catch(error){
            console.error('Error al obtener el usuario:', error);
            setError("Contraseña incorrecta. Por favor, inténtalo de nuevo."); // Mostrar un mensaje de error
            
        }
        
    }

    return (
        

        <div className="container">
            <h2>Logueate para Ingresar</h2>

            <form onSubmit={getUser}>

                <div>
                    <input className="input-control mt-4 mb-4" type="text" name="usuario" placeholder="Usuario" id="inputUser" onChange={(e) => setUser(e.target.value)} />
                </div>
                <div>
                    <input className="input-control mt-4 mb-4" type="password" name="password" placeholder="Contraseña" id="inputPasssword" onChange={(e) => setPass(e.target.value)} />
                </div>

                <input type="submit" className="btn btn-primary mt-2"  value="Ingresar"/>
                {error && <div className="error">{error}</div>} {/* Mostrar el mensaje de error si existe */}


            </form>
        </div>
        

    )
}