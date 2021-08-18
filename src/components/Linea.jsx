import React from 'react'
import './Linea.css'

function Linea({nombre, dia , hora, id, eliminar}) {
    
    return (
        
            <tr className="tr" >
                <th className="thbutton"><button className="botonx" onClick={() => {eliminar(id, nombre)}}>X</button></th>
                <th>{nombre}</th>
                <th>{dia}</th>
                <th>{hora}</th>
            </tr>
       
    )
}

export default Linea
