import {db} from './components/Firebase-config.js';
import {collection, getDocs, addDoc,doc, deleteDoc, updateDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import Tareas from './components/Tareas.js';
import './App.css';
import FormGuardar from './components/Guardar.js';
import FormActualizar from './components/Actualizar.js';

function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setNuevoTitulo] = useState("");
  const [descripcion, setNuevaDescripcion] = useState("");
  const [responsable, setNuevoResponsable] = useState("");
  const [prioridad, setNuevaPrioridad] = useState("");
  const [guardado, setGuardado] = useState(false)
  const [tareaActual, setTareaActual] = useState({});
  const [mostrarForm, setMostrarForm] = useState(false);

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

     await addDoc(tareasColeccionRef, nuevaTarea); // guarda la tarea en firestore
     setGuardado(true)
  }

  const eliminarRegistro = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este registro?")) {
      const tareaRef = doc(tareasColeccionRef, id);
      await deleteDoc(tareaRef);
      const arrayFiltrado = tareas.filter(item => item.id !== id)
      setTareas(arrayFiltrado)
    }
  }
  

  const editarRegistro = async (tarea) => {
    const claves = ['titulo', 'descripcion', 'responsable', 'prioridad'];
    const nuevaTarea = claves.reduce((obj, clave) => {
      obj[clave] = tarea[clave];
      return obj;
    }, {});
    
    const tareaRef = doc(tareasColeccionRef, tarea.id);
    await updateDoc(tareaRef, nuevaTarea);
    setMostrarForm(false);
    console.log(nuevaTarea)
    setGuardado(true)
  };
  

    const handleEditar = (tarea) => {
      setTareaActual(tarea);
      setMostrarForm(true)
    }

  return (
<div className="App">
      <FormGuardar 
        setNuevoTitulo={setNuevoTitulo} 
        setNuevaDescripcion={setNuevaDescripcion} 
        setNuevoResponsable={setNuevoResponsable} 
        setNuevaPrioridad={setNuevaPrioridad} 
        guardarRegistro={guardarRegistro}
      />
      {mostrarForm && (
      <FormActualizar
        tareaActual={tareaActual}
        editarRegistro={editarRegistro}
        setNuevoTitulo={setNuevoTitulo} 
        setNuevaDescripcion={setNuevaDescripcion} 
        setNuevoResponsable={setNuevoResponsable} 
        setNuevaPrioridad={setNuevaPrioridad} 
        />
      )}
    <Tareas 
      tareas={tareas} 
      eliminarRegistro={eliminarRegistro}
      handleEditar={handleEditar}
    />
  </div>
  );
}

export default App;
