

//guarda as funções de redirecionamento


export const goToHomePage= (navigate) =>{
    navigate('/')

}

export const goToPokedexPage = (navigate) =>{
    navigate('/pokedex')

}

export const goToPokemonDetailPage = (navigate, namePokemon) =>{
    navigate(`/details/${namePokemon}`)

}
