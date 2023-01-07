import React, { useEffect, useState } from 'react'
import Router from './routes/Router'
import { GlobalStyled } from './GlobalStyled'
import axios from 'axios'
import { GlobalContext } from './context/GlobalContext'


const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const [detail, setDetail] = useState([])
  console.log(detail)
 



  //botão que quando vc clica (imput) add (função) o pokemon(objeto) para a pokedex(array de objetos)
  //agora que coloquei na pokedex (array de objetos) o pokemon(objeto), preciso apaga-lo(função) da home.
  


 
  const addToPokedex = (getPokemon) => {
   
    
    const insidePokedex = pokedex.find((pokemonToPokedex) => 
    pokemonToPokedex.name === getPokemon.name);

    if (!insidePokedex) {
      const newPokedex = [...pokedex,getPokemon]
      setPokedex(newPokedex)
  }

 const copyPokedex= [...pokedex,getPokemon]

setPokedex(copyPokedex)
  
localStorage.setItem('pokedex',JSON.stringify(copyPokedex))

}
  const removeToPokedex = (removPokemon) => {
    const newPokedex = pokedex.filter((pokemonToPokedex) => pokemonToPokedex.name !== removPokemon.name )

    setPokedex (newPokedex)

    localStorage.setItem('pokedex',JSON.stringify(newPokedex))
  }



  // const removeToPageDetail = (removPokemonDetail) => {
  //   const copyPokedex= []
  //   const newPokeDetail = pokedex.filter((pokemonToDetail) => {
  //     if(pokemonToDetail.name !== removPokemonDetail.name ){
  //       copyPokedex.push(pokemonToDetail)
  //     }
  //   })
  //   setPokedex(copyPokedex)
  //   // localStorage.setItem('pokedex',JSON.stringify(newPokeDetail))
  //   } 


    // console.log("ALLLLLLLLL",removPokemonDetail)

    // setDetail (newPokeDetail)

    // console.log("hhhhhhhhhhhhhhh",newPokeDetail)

   
  // }






const getAllPokemons = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/`)

    .then((resposta) => {

      setPokemons(resposta.data.results)
      console.log(resposta.data.results)

    })
    .catch((erro) => {
      console.log(erro)
    })
}
useEffect(() => {
  getAllPokemons()
}, [])


const context = {
  pokemons: pokemons,
  setPokemons: setPokemons,
  pokedex: pokedex,
  setPokedex: setPokedex,
  addToPokedex,
  removeToPokedex,
  detail,
  setDetail,
  // removeToPageDetail
  

}

return (
  <>
    <GlobalStyled />
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  </>
)
}

export default App
