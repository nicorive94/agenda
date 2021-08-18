import React from 'react'
import Linea from './Linea'
import './Tabla.css'

export default function Tabla({datos, logueado, eliminar}) {
    console.log(datos)
    return (
        <div>
             {datos && 
            <div className="form">
                <h3>Pacientes</h3>
                <table  className="tabla">                   
                    <thead>
                        <tr className="tr" >
                            <th className="thbutton" style={{height: "25px"}}></th>
                            <th>Nombre</th>
                            <th>Día</th>
                            <th>Horario</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((p, key) => <Linea eliminar={eliminar} nombre={p.nombre} dia={p.dia} hora={p.hora} id={logueado.uid} key={key} />)}
                    </tbody>
                </table>
            </div>}
        </div>
    )
}
