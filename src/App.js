import {db} from './components/Firebase-config.js';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import Tareas from './components/Tareas.js';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setNuevoTitulo] = useState("");
  const [descripcion, setNuevaDescripcion] = useState("");
  const [responsable, setNuevoResponsable] = useState("");
  const [prioridad, setNuevaPrioridad] = useState("");
  const [guardado, setGuardado] = useState(false)

  const tareasColeccionRef = collection(db, "tareas");



  useEffect( () => {
    async function getTareas() {
      const data= await getDocs (tareasColeccionRef)
      setTareas(data.docs.map ((doc)=> ({...doc.data() , id: doc.id})))
      //console.log(data);
    }
    setGuardado(false)
    getTareas();
  },[guardado])
  const guardarRegistro = async(event) =>{
    event.preventDefault();
      const nuevaTarea= {
        titulo,descripcion,responsable,prioridad
      }

      /*const nuevaTarea= {
        "titulo":titulo,"descripcion":descripcion,"responsable": responsable,"prioridad":prioridad
      }
      */
     await addDoc(tareasColeccionRef, nuevaTarea); // guarda la tarea en firestore
     setGuardado(true)
  }
  return (
    <div className="App">
      <form onSubmit={guardarRegistro}>
       <input style={{padding: '10px 20px'}} type='text' placeholder='Titulo' onChange={(event) => setNuevoTitulo(event.target.value) }/>
       <input style={{padding: '10px 20px'}} type='text' placeholder='Descripcion' onChange={(event) => setNuevaDescripcion(event.target.value) }/>
       <input style={{padding: '10px 20px'}} type='text' placeholder='Responsable' onChange={(event) => setNuevoResponsable(event.target.value) }/>
       <input style={{padding: '10px 20px'}} type='text' placeholder='Prioridad' onChange={(event) => setNuevaPrioridad(event.target.value) }/>

       <button style={{color: 'white', backgroundColor:'green', border:'green', padding:'12px'}} >Guardar</button>
       <button style={{color: 'white', backgroundColor:'#30BA96', border:'green', padding:'12px'}} >Actualizar</button>
       </form>
        <Tareas tareas={tareas}/>
    </div>
  );
}

export default App;
