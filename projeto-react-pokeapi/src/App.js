import React, { useEffect, useState } from 'react'
import Router from './routes/Router'
import { GlobalStyled } from './GlobalStyled'
import axios from 'axios'
import { GlobalContext } from './context/GlobalContext'
import Header from './components/Header/Header'



const App = () => {



const [pokemons, setPokemons] = useState([])

const getAllPokemons = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/`)

  .then((resposta)=>{

    setPokemons(resposta.data.results)
    console.log(resposta.data.results)

  })
  .catch((erro)=>{
    console.log(erro)
  })
}
useEffect(()=>{
  getAllPokemons()
},[])

console.log(pokemons)

const context= {
  pokemons:pokemons,
  setPokemons:setPokemons
}



  return (
    <>
    <Header/>
  
    <GlobalStyled/>
    <GlobalContext.Provider value={context}>
      <Router/>
    </GlobalContext.Provider>
    </>
  )
}

export default App
