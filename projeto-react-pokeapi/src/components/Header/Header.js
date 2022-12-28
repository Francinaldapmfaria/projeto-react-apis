import React from 'react'
import logoPokemon from "../../img/marcapokemon.svg"
import { HeaderStyled } from './HeaderStyle'


const Header = () => {
  return (
    
      <HeaderStyled>

        <img src={logoPokemon} alt="logo Pokemon"></img>
        <div>
            <button>Pokedex</button>
        </div>
      </HeaderStyled>
        
    
    
  )
}

export default Header