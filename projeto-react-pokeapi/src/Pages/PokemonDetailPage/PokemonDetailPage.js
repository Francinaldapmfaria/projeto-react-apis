import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import pokeBola from "../../img/pokebola.svg"
import { useParams } from 'react-router-dom'
import { ChakraProvider, Stack, Progress, Container, Accordion } from "@chakra-ui/react"
import axios from 'axios'
import { BigCard, CaixaBarras, Main, Moves, PokeFrenteCosta, StatsBar } from '../PokemonDetailPage/PokemonDetailPageStyle'
import { colorCard } from '../../utilities/cor'
import { imageType } from '../../img/tipo'
import { GlobalContext } from '../../context/GlobalContext'




export const PokemonDetailPage = () => {

  const context = useContext(GlobalContext)
  const { detail, setDetail } = context


  const [type1, setType1] = useState("")
  const [type2, setType2] = useState("")

  const [powerBar, setPowerBar] = useState([])
  console.log("apareceu a barra", powerBar)



  const params = useParams()
  console.log(params)





  const informationPokemons = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.namePokemon}`)

      .then((resposta) => {
        setDetail(resposta.data)
        setPowerBar(resposta.data.stats)
        setType1(resposta.data.types[0].type.name)
        setType2(resposta.data.types[1].type.name)
        console.log("aquiiiiii", resposta)

      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    informationPokemons()
  }, [])


  return (
    <ChakraProvider>

      <Header />

      <Main>

        <p className='detalhes'>Detalhes</p>

        <BigCard color={() => colorCard(detail.types && detail?.types[0]?.type.name)}>

          <div className='idnomebig'>
            <span>#{detail.id}</span>
            <h1>{detail.name}</h1>
          </div>

          <PokeFrenteCosta>
            <img className='frente' src={detail?.sprites?.front_default} alt="imagem bulba"></img>
            <img className='costa' src={detail?.sprites?.back_default} alt="imagem costa"></img>
          </PokeFrenteCosta>

          <img className='pokemonGrande' src={detail?.sprites?.other['official-artwork'].front_default} alt="pokemon"></img>

          <img className='pokeBola' src={pokeBola} alt="imagem pokebola"></img>

          <div className='pokeTipos'>
            {detail.types && <div><img src={imageType(type1)} alt='tipo1'></img>
              {detail.types[1] && <img src={imageType(type2)} alt='tipo2'></img>}
            </div>}
          </div>


          <StatsBar>
            <h1 className='tituloBasestats'>Base stats</h1>

            <CaixaBarras>

              <div className='nomesStats'>
                <p>{powerBar[0]?.stat.name}</p>
                <p>{powerBar[1]?.stat.name}</p>
                <p>{powerBar[2]?.stat.name}</p>
                <p>{powerBar[3]?.stat.name}</p>
                <p>{powerBar[4]?.stat.name}</p>
                <p>{powerBar[5]?.stat.name}</p>
                
                <p>Total</p>
              </div>

              <div className='numeroBarra'>
                {<text>{powerBar[0]?.base_stat}</text>}
                <text>{powerBar[1]?.base_stat}</text>
                <text>{powerBar[2]?.base_stat}</text>
                <text>{powerBar[3]?.base_stat}</text>
                <text>{powerBar[4]?.base_stat}</text>
                <text>{powerBar[5]?.base_stat}</text>
              </div>

              <div className='barras'>
                {powerBar[0] &&
                  <Stack spacing={5} w="200px">
                    {/* <p>cade as barras</p> */}
                    
                    <Progress colorScheme='orange' size='sm' value={powerBar[0]?.base_stat} />
                    <Progress colorScheme='orange' size='sm' value={powerBar[1].base_stat} />
                    <Progress colorScheme='orange' size='sm' value={powerBar[2].base_stat} />
                    <Progress colorScheme='yellow' size='sm' value={powerBar[3].base_stat} />
                    <Progress colorScheme='yellow' size='sm' value={powerBar[4].base_stat} />
                    <Progress colorScheme='orange' size='sm' value={powerBar[5].base_stat} />
                </Stack>
              }

              <div className='total'>{
                powerBar.reduce((acc,valor)=>{
                  return acc + valor.base_stat
                },0)
                // powerBar[0]?.base_stat +
                // powerBar[1]?.base_stat +
                // powerBar[2]?.base_stat +
                // powerBar[3]?.base_stat +
                // powerBar[4]?.base_stat +
                // powerBar[5]?.base_stat
              }</div>

              </div>

            </CaixaBarras>

          </StatsBar>


          <Moves>
            <p className='tituloMoves'><b>Moves:</b></p>

            <div className='divmoves'>
              {detail.moves?.map((pokemove, index) => {
                if (index < 5) {
                  return <label className='textmoves'>{pokemove.move?.name}</label>
                }
              })}
            </div>


          </Moves>

        </BigCard>


      </Main>

    </ChakraProvider>
  )
}

