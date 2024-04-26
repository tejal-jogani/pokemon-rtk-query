import { Routes, Route } from "react-router-dom"
import Pokemon from "./pages/pokemon"
import PokemonDetails from "./pages/pokemon/details"
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Pokemon /> } />
        <Route path="/pokemon/:id" element={ <PokemonDetails /> } />
      </Routes>
    </div>
  )
}

export default App
