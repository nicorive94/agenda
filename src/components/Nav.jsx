import React from 'react'
import './Nav.css'


function Nav({logueado, logout, accionBuscar, accionAgendar}) {
    return (
        <div>
            {logueado.estado &&
            <nav>
                <ul>    
                    <button className="logout" onClick={() => accionAgendar()}>Agendar</button>
                    <button className="logout" onClick={() => accionBuscar()}>Buscar</button>
                    <button className="logout" onClick={() => {logout()}}>Cerrar sesión</button>                 
                </ul>
            </nav>}
        </div>
    )
}

export default Nav
