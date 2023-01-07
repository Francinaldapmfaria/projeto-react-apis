import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useContext } from 'react'
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import HomePage from "../Pages/HomePage/HomePage"
import  {PokemonDetailPage}  from "../Pages/PokemonDetailPage/PokemonDetailPage"
import NotFaoundPage from "../Pages/NotFoundPage/NotFaoundPage"
import { GlobalContext } from "../context/GlobalContext"

const Router = () => {
  const context= useContext(GlobalContext)
  const {addToPokedex}= context
 

  return (

    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage addToPokedex={addToPokedex} />} />
            <Route path="/pokedex" element={<PokedexPage/>} />
            <Route path="/details/:namePokemon" element={<PokemonDetailPage/>} />
            <Route path="*" element={<NotFaoundPage/>} />
          
        </Routes>
    </BrowserRouter>

  )
}

export default Router