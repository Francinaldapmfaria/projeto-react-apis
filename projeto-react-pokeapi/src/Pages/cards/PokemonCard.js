import React, { useContext, useState } from 'react'
import imgPokebola from "../../img/pokebola.svg"
import { CardStyled, Container, Button, Detalhes } from './PokemonCardStyle'
import { GlobalContext } from '../../context/GlobalContext'
import axios from 'axios'
import { useEffect } from 'react'
import { colorCard } from '../../utilities/cor'
import { imageType } from '../../img/tipo'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToPokemonDetailPage } from '../../routes/coordinator'
import botaoCapturar from "../../img/capturar.svg"
import botaoExcluir from "../../img/excluir.svg"



const PokemonCard = (props) => {

  const [type1, setType1]=useState("")
  const [type2, setType2]=useState("")

  const location = useLocation()

  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const { addToPokedex, removeToPokedex } = context



  const [detailPokemon, setDetailPokemon] = useState({})
  console.log(detailPokemon)
  




  useEffect(() => {
    getDetailPokemon()
  }, [])


  const getDetailPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)

      .then((resposta) => {

        setDetailPokemon(resposta.data)
        setType1(resposta.data.types[0].type.name)
        setType2(resposta.data.types[1].type.name)
        console.log(resposta.data)

      })
      .catch((erro) => {
        console.log(erro)
      })
  }


  return (
    <Container>

      <CardStyled color={colorCard(type1)}>

        <div className='NomeIdEsquerdo'>
          <span>#{detailPokemon.id}</span>
          <h1>{detailPokemon.name}</h1>
        </div>

        <img className='bulbassaur' src={detailPokemon.sprites?.other['official-artwork'].front_default} alt="imagem pokemon"></img>

        <div className='grassPoisson'>
          <img src={imageType(type1)}></img>
          <img src={imageType(type2)}></img>
        </div>

        {/* <img className='pokebola' src={imgPokebola} alt= "imagem pokebola"></img> */}
          <Detalhes onClick={() => goToPokemonDetailPage(navigate, detailPokemon?.name)}>Detalhes</Detalhes>



        
          {location.pathname === "/" ? (
            <Button onClick={() => addToPokedex(detailPokemon)}><img src={botaoCapturar}></img></Button>
          ) : (<Button  onClick={() => removeToPokedex(detailPokemon)}><img src={botaoExcluir}></img></Button>)
          }
    

      </CardStyled>

    </Container>


  )
}

export default PokemonCard