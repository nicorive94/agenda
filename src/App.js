import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Agendar from './components/Agendar';
import Tabla from './components/Tabla';
import Nav from './components/Nav';
import Buscar from './components/Buscar';




function App() {

  const [logueado, setlogueado] = useState({estado: false, uid:""})
  const [datos, setdatos] = useState()
  const [accion , setaccion] = useState("agendar")
  const [datoEncontrado, setdatoEncontrado] = useState([])

  const accionBuscar = () =>{
    setaccion("buscar")
  }
  const accionAgendar = () =>{
    setaccion("agendar")
  }

  useEffect(() => { 
    obtenerDatos();
    }, [logueado])

  useEffect(() => {

  }, [datos])
  

  const writeUserData = (userId, email) => {
    firebase.database().ref('users/' + userId).set({
      email: email,
      pacientes:{}
    });
    console.log(`Base de datos para ${email} creada`)
    alert("Usuario creado")
  }

  const registrarse = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(`Usuario ${email} creado`);
      writeUserData(user.uid, email);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
   console.log(email)
  }

  const obtenerDatos = () =>{
    if(logueado.estado){  
        var ref = firebase.database().ref(`users/${logueado.uid}`);
        ref.once("value")
        .then(function(snapshot) {
        var pacientes = snapshot.child("/pacientes").val();
        if(pacientes){
          setdatos(Object.values(pacientes))
        } else setdatos([])        
        
      });
    }
  }

  const buscar = (nombre, dia, hora) =>{
    let dato;
    if(nombre !== ""){
      dato = nombre
    }
    if(dia !== ""){
      dato = dia
    }
    if(hora !== ""){
      dato = hora
    }
    setdatoEncontrado([])
    if(datos){
      for(let i= 0; i< datos.length; i++){
        for(let d in datos[i]){
          if(datos[i][d] === dato ){
            setdatoEncontrado((datoEncontrado) => [...datoEncontrado, datos[i]])
          }
        }
      }
    }
  }

  const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user
    console.log(user.uid)
    console.log(user)
    console.log("iniciaste sesión con el usuario: ", email)
    
    setlogueado({estado: true, uid: user.uid})
    obtenerDatos()
    
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
      console.log(errorMessage)
      console.log("no iniciaste sesion")
      alert("usuario inexistente")
    })
       
  }
  
  const logout = () =>{
    firebase.auth().signOut()
    .then(()=>{
      setlogueado({estado: false, uid:""})
      window.location.assign("http://localhost:3000/");
      console.log("cerraste sesion");
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const eliminar = (id, nombre) =>{
    if(window.confirm("¿¿esta seguro que quiere eliminar este paciente??")){
      firebase.database().ref(`users/${id}/pacientes/${nombre}`).remove()
      obtenerDatos()
      console.log("paciente eliminado")
    }
  }
  
  const writeUserInfo = (id, info) =>{
      firebase.database().ref(`users/${id}/pacientes/${info.nombre}`).set(info);
    
    // firebase.database().ref(`users/${id}/pacientes/`).set(info);
    console.log("paciente agregado")
  }
  
  return (
    <div >
        <Login login={login} registrarse={registrarse} logueado={logueado}/> 
        <Nav logueado={logueado} logout={logout} accionBuscar={accionBuscar} accionAgendar={accionAgendar}/>   
        {accion === "agendar" && <Agendar logueado={logueado}  setUserInfo={writeUserInfo} datos={datos} obtenerDatos={obtenerDatos}/>}
        {accion=== "buscar" && <Buscar logueado={logueado}  buscar={buscar} datos={datos} obtenerDatos={obtenerDatos}/>}
        {accion === "agendar" && <Tabla datos={datos} logueado={logueado} eliminar={eliminar}/>}
        {accion === "buscar" && <Tabla datos={datoEncontrado} logueado={logueado} eliminar={eliminar}/>}
      
    </div>
  );
}

export default App;
