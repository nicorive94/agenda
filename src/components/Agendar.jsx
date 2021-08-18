import React, { useEffect, useState } from 'react'
import Tabla from './Tabla';
import './Aplicacion.css'

function Agendar({logueado, setUserInfo, obtenerDatos}) {

    const [info, setinfo] = useState({
        nombre: "",
        dia:"",
        hora:""
    })

    

    const handleInputChange= (event) => {
        setinfo({
            ...info,
        [event.target.name]: event.target.value
        })  
    }

    return (
        <div>
            {logueado.estado && 
            <div className="form">   
                          
                <form onSubmit={(e) =>{
                                e.preventDefault(); 
                                if(info.nombre === "" || info.dia === "" || info.hora === ""){
                                    return alert("complete todos los campos") 
                                } else 
                                setUserInfo(logueado.uid, info)
                                obtenerDatos()                                                 
                                }}>
                    <h3>Agendar pacientes</h3>
                    <br />
                    <div className="inp-controls">
                        <label>Nombre</label>
                        <input type="text" name="nombre" onChange={handleInputChange}/>
                    </div>
                    <div className="inp-controls">
                        <label>Dia</label>
                        <select type="text" name = "dia" onChange={handleInputChange}>
                            <option>Seleccione un día</option> 
                            <option>Lunes</option> 
                            <option>Martes</option> 
                            <option>Miércoles</option> 
                            <option>Jueves</option>
                            <option>Viernes</option> 
                        </select>
                    </div>
                    <div className="inp-controls">
                        <label>Hora</label>
                        <select type="time" name="hora" onChange={handleInputChange}>
                            <option>Seleccione un horario</option>
                            <option>17:00</option>
                            <option>17:40</option>
                            <option>18:20</option>
                            <option>19:00</option>
                            <option>19:40</option>
                            <option>20:20</option>
                        </select>
                    </div>
                    <br />    
                  <button className="button">Agendar</button>                
                </form>
                
              
                           
            </div>
            }
        </div>
    )
}

export default Agendar
