import React, { useContext, useState } from 'react'
import Bulbassaur from "../../img/bulbassaur.svg"
import tagGrass from "../../img/grass.svg"
import tagPoisson from "../../img/poison.svg"
import imgPokebola from "../../img/pokebola.svg"
import { CardStyled } from './PokemonCardStyle'
import { GlobalContext } from '../../context/GlobalContext'
import axios from 'axios'
import { useEffect } from 'react'
import { colorCard, cores } from '../../utilitarios/cor'
import { imageType, ImageType, ImgTipo } from '../../utilitarios/tipo'

const PokemonCard = (props) => {

  const context=useContext(GlobalContext)
  const {pokemons}=context
 


  const [detailPokemon, setDetailPokemon]= useState([])


  useEffect(()=>{
    getDetailPokemon()
  },[])

  const getDetailPokemon = () => {
    axios.get(`${props.pokemon.url}`)
  
    .then((resposta)=>{
  
      setDetailPokemon(resposta.data)
      console.log(resposta.data)
  
    })
    .catch((erro)=>{
      console.log(erro)
    })
  }

  const typePokemon=() => {
    if(detailPokemon.types[1]){
      return (
        <>
        <img src={imageType(detailPokemon.types[0].type.name)}/>
        <img src={imageType(detailPokemon.types[1].type.name)}/>
        </>
      )

    }
    return (
      <img src={imageType(detailPokemon.types && detailPokemon.types[0].type.name)}/>
    )
  }
 

  return (
    <CardStyled color={colorCard(cor)}>
    

    <div className='NomeIdEsquerdo'>
    <span>#{detailPokemon.id}</span>
    <h1>{detailPokemon.name}</h1>
    </div>

    <img className='bulbassaur' src={detailPokemon.sprites?.other['official-artwork'].front_default} alt= "imagem pokemon"></img>

    <div className='grassPoisson'>
    <span>{typePokemon()}</span>
    </div>

    <img className='pokebola' src={imgPokebola} alt= "imagem pokebola"></img>

    <div className='detalhes'>
        <button><p>Detalhes</p></button>
        
    </div>
    <div className='botao'>
      <button>Capturar</button>
    </div>
    
    </CardStyled>
    
    
  )
}

export default PokemonCard