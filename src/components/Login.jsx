import React,{useState} from 'react'
import './Login.css'


function Login({login, registrarse, logueado}) {

    const [boton, setboton] = useState("")

    const [log, setlog] = useState({
        usuario: "",
        contraseña:""  
    })

    const handleInputChangelog = (event) => {
        setlog({
            ...log,
        [event.target.name]: event.target.value
        })
    }

    const loguear = () =>{setboton("log")}
    const registrar = () =>{setboton("reg")}
    
    return (
        <div >
            {!logueado.estado &&
     
            <div className="container">                                                        
                    <form className="form"
                        onSubmit={(e) =>{
                                    e.preventDefault(); 
                                    if(boton === "log"){
                                        login(log.usuario, log.contraseña)
                                    }
                                    if(boton === "reg"){
                                        registrarse(log.usuario, log.contraseña)
                                    } 
                                    }} style={{width: "300px"}}>
                        <h3>Bievenida</h3> 
                        <input className="controls"  placeholder="Usuario:" type="email" name="usuario" id="usuario" onChange={handleInputChangelog}/>
                        <input className="controls" type="password" placeholder="Contraseña:" name="contraseña" id="contraseña" onChange={handleInputChangelog} />
                        <button className="button" type="submit" onClick={()=>{loguear()}} >Iniciar sesión</button>
                        <button className="button" type="submit" onClick={()=>{registrar()}} >Registrarse</button>
                    </form>
            </div>
            }
        </div>
    )
}

export default Login
