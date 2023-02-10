import { Button } from 'bootstrap';
import React from 'react'

export default function Tareas(props) {
  console.log(props.tareas);
    return (
    <div><p><strong style={{color:'#094417f2', fontSize:'30px' }}>TAREAS A REALIZAR </strong></p>
      <div className='container'>
        {
          props.tareas.map( tarea => {
          return <div className='card md-4'>
                <div key={tarea.id}>
                <div className='card1'>
                <h1 style={{color: 'white', fontSize: '20px'}}>{tarea.titulo}</h1>
                </div>
                <div className='card-body'>
                <p> <strong>Descripcion: </strong>  {tarea.descripcion}</p>
                <p> <strong>Responsable: </strong> {tarea.responsable}</p>
                </div>
                <div className='card-f'>
                <p><strong>Prioridad: </strong> <mark>{tarea.prioridad}</mark></p>
                <button style={{color: 'white', backgroundColor:'#366842f2', border:'none', borderRadius:'25px', padding:'10px'}}>Eliminar </button>
                </div>
                </div>
            </div>

        })
        }
    </div>
    </div>
  )
}
