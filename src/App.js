import {db} from './components/Firebase-config.js';
import {collection, getDocs} from 'firebase/firestore';
import { useEffect } from 'react';
import './App.css';

function App() {
  const tareasColeccionRef = collection(db, "tareas");

  useEffect( () => {
    async function getTareas() {
      const data= await getDocs (tareasColeccionRef)
      console.log(data);
    }

    getTareas();
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
