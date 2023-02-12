import React from 'react'

export default function FormGuardar(props) {
  return (
    <form onSubmit={props.guardarRegistro}>
    <input style={{padding: '10px 20px'}} type='text' placeholder='Titulo' onChange={(event) => props.setNuevoTitulo(event.target.value) }/>
    <input style={{padding: '10px 20px'}} type='text' placeholder='Descripcion' onChange={(event) => props.setNuevaDescripcion(event.target.value) }/>
    <input style={{padding: '10px 20px'}} type='text' placeholder='Responsable' onChange={(event) => props.setNuevoResponsable(event.target.value) }/>
    <input style={{padding: '10px 20px'}} type='text' placeholder='Prioridad' onChange={(event) => props.setNuevaPrioridad(event.target.value) }/>

    <button style={{color: 'white', backgroundColor:'green', border:'green', padding:'12px'}} >Guardar</button>
    </form>

  )
}
