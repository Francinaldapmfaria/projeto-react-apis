import React, { useContext } from 'react'
import PokemonCard from "../cards/PokemonCard.js"
import { HomePageContainer, HomeStyled } from './HomePageStyle.js'
import { GlobalContext } from '../../context/GlobalContext.js'
import Header from '../../components/Header/Header.js'



const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokemons, addToPokedex, pokedex } = context

  const filterHomePokemons = () => 
    pokemons.filter((pokemonsList) =>
      !pokedex.find((pokemonInPokedex) => pokemonsList.name === pokemonInPokedex.name)
    )
  
  return (
    <HomePageContainer>
      <Header />
      <HomeStyled>
        <h2 className='titulo'>Todos os Pokémons</h2>
        <div className='cards'>
         
          {filterHomePokemons().map((pokemon, key) => {

            return (
              <PokemonCard key={pokemon.url} name={pokemon.name} 
              addToPokedex={addToPokedex}></PokemonCard>
            )
          })}
        </div>
      </HomeStyled>
    </HomePageContainer>
  )
}

export default HomePage