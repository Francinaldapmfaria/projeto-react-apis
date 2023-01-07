import React, { useContext, useEffect, useState } from 'react'
import logoPokemon from "../../img/marcapokemon.svg"
import { HeaderStyled, Button, BotaoPegPokedex } from './HeaderStyle'
import { goToPokedexPage, goToHomePage } from '../../routes/coordinator'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import excluirPokedex from "../../img/excluirpokedex.svg"
import { GlobalContext } from '../../context/GlobalContext'
import botaoPokedex from "../../img/botaopokedex.svg"
import axios from 'axios'




const Header = () => {

  const [detail, setDetail] = useState({})

  const params = useParams()

  const informationPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.namePokemon}`)

      .then((resposta) => {
        setDetail(resposta.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    informationPokemons()
  }, [params])

 

  const location = useLocation()

  //hook para redirecionar
  const navigate = useNavigate()

  const context = useContext(GlobalContext)
  const { removeToPokedex, pokedex, addToPokedex, } = context

  const individualizingHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <div>

            <div className='logoPokemon'>
              <img src={logoPokemon} alt="logo Pokemon"></img>
            </div>

            <div className='pokedex'>
              <Button onClick={() => goToPokedexPage(navigate)}><img src={botaoPokedex}></img></Button>
            </div>

          </div>
        )
      case "/pokedex":
        return (
          <BotaoPegPokedex>
            <div className='logoPokemon' >
              <img src={logoPokemon} alt="logo Pokemon"></img>
            </div>

            <button className='todosPokemons' onClick={() => goToHomePage(navigate)}>Todos os Pokémons</button>

          </BotaoPegPokedex>
        )
      case `/details/${params.namePokemon}`:
        return (
          <BotaoPegPokedex>



            <div className='logoPokemon'>
              <img src={logoPokemon} alt="logo Pokemon"></img>
            </div>
            <div className='todosPokemons'>
              <button onClick={() => goToHomePage(navigate)}>Todos os Pokémons</button>
            </div>
            {pokedex.find((pokemon) => pokemon.name === params.namePokemon) ?
              <button className='excluirPokedex' onClick={() => removeToPokedex(detail)}><img src={excluirPokedex}></img></button> :
              <button className='addPokedex' onClick={() => addToPokedex(detail)}>Capturar Pokemon</button>}

          </BotaoPegPokedex>
        )
      default:
        return (

          <div>
            <button onClick={() => goToHomePage(navigate)}>Página inicial</button>
          </div>
        )
    }
  }

  return (

    <HeaderStyled>
      {individualizingHeader()}
    </HeaderStyled>
  )
}

export default Header