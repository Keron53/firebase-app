import React from 'react'

export default function Tareas(props) {
  console.log(props.tareas);
    return (
    <div>Tareas
        {
        props.tareas.map( tarea => {
            return <div key={tarea.id}>
                <h1>{tarea.titulo}</h1>
                <h2>{tarea.descripcion}</h2>
                <strong>{tarea.responsable}</strong>
                <div><mark>{tarea.prioridad}</mark></div>
                </div>
        })
        }
    </div>
  )
}
