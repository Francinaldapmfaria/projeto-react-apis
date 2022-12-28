import React, { useContext } from 'react'
import PokemonCard from "../cards/PokemonCard.js"
import { HomePageContainer, HomeStyled } from './HomePageStyle.js'
import { GlobalContext } from '../../context/GlobalContext.js'



const HomePage = () => {

  const context= useContext(GlobalContext)
  const{pokemons, setPokemons} = context


  return (
<HomePageContainer>

   <HomeStyled>
     <h2 className='titulo'>Todos os Pokémons</h2>
     <div className='cards'>


     {pokemons.map((pokemon,key) =>{
       console.log(pokemon)
       
       
       
       return (
         <PokemonCard pokemon={pokemon} key={key}>

        </PokemonCard>
      )
    })}
  
    </div>

   </HomeStyled>

</HomePageContainer>
  )
}

export default HomePage