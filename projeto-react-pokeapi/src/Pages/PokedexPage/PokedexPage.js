import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { GlobalContext } from '../../context/GlobalContext'
import PokemonCard from '../cards/PokemonCard'
import { HomeStyled } from './PokedexStyle'


const PokedexPage = () => {


  const context=useContext(GlobalContext)
  const { setPokedex, pokedex, removeToPokedex}=context

  useEffect(() => {
    const pokemonPokedex = localStorage.getItem('pokedex')
    const myPokedex = JSON.parse(pokemonPokedex)
    setPokedex(myPokedex)
  }, [])
  
  return (
    <>
    <Header/>
    
    <HomeStyled>
        <h2 className='titulo'>Todos os Pokémons</h2>
        <div className='cards'>
         
          {pokedex.map((pokemon) => {

            return (
              <PokemonCard key={pokemon.name} name={pokemon.name} removeToPokedex={removeToPokedex}></PokemonCard>
            )
          })}
        </div>
      </HomeStyled>
    </>
  )
}

export default PokedexPage