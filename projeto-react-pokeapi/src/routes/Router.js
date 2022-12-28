import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from 'react'
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import HomePage from "../Pages/HomePage/HomePage"
import  {PokemonDetailPage}  from "../Pages/PokemonDetailPage/PokemonDetailPage"
import NotFaoundPage from "../Pages/NotFoundPage/NotFaoundPage"

const Router = () => {
  return (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/pokedex" element={<PokedexPage/>} />
            <Route path="/detalhes/:nomePokemon" element={<PokemonDetailPage/>} />
            <Route path="*" element={<NotFaoundPage/>} />
          
        </Routes>
    </BrowserRouter>

  )
}

export default Router