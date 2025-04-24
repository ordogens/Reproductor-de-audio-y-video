import './App.css'
import { NavBar } from "./header/NavBar"
import { Routes, Route } from 'react-router-dom'
import { Renderizador } from "./rederizador/Renderizador"

export const App = () => {

  return (
    
    <div className='App'>
          <NavBar />
        <Routes>
          <Route path='/parte1' element={<Renderizador/>} />
          <Route path='/parte2' element={<h1>Parte 1</h1>} />
        </Routes>
    </div>
    
  )
}


