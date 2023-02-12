import React, { useState } from 'react'

export default function FormActualizar(props) {
  const [titulo, setTitulo] = useState(props.tareaActual.titulo);
  const [descripcion, setDescripcion] = useState(props.tareaActual.descripcion);
  const [responsable, setResponsable] = useState(props.tareaActual.responsable);
  const [prioridad, setPrioridad] = useState(props.tareaActual.prioridad);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editarRegistro({...props.tareaActual, titulo, descripcion, responsable, prioridad});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{padding: '10px 20px'}} type='text' value={titulo} onChange={(event) => setTitulo(event.target.value) }/>
      <input style={{padding: '10px 20px'}} type='text' value={descripcion} onChange={(event) => setDescripcion(event.target.value) }/>
      <input style={{padding: '10px 20px'}} type='text' value={responsable} onChange={(event) => setResponsable(event.target.value) }/>
      <input style={{padding: '10px 20px'}} type='text' value={prioridad} onChange={(event) => setPrioridad(event.target.value) }/>
      <button style={{color: 'white', backgroundColor:'green', border:'green', padding:'12px'}} type="submit">Actualizar</button>
    </form>
  );
}