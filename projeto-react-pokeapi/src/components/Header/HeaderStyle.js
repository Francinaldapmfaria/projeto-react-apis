import styled from "styled-components"

export const HeaderStyled = styled.header`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
    background-color:#FFFFFF ;
    height:25vh;

   
`

export const Button= styled.div`
    position: absolute;
    left: 1600px;
    top: 70px;
    cursor: pointer;
`
export const BotaoPegPokedex= styled.div`
 .logoPokemon{
     position: absolute;
    left: 850px;
    top: 50px;     
    }

    .addPokedex{
position: absolute;
width: 220px;
height: 60px;
left: 1600px;
top: 90px;
 cursor: pointer;
 font-size:16px;
 border-radius: 8px;
 align-items: center;
display:flex;
justify-content:center;
background-color:pink;
color: white;


    }

    .todosPokemons{
            position: absolute;
            width: 210px;
            height:36px;
            left: 150px;
            top: 120px;
            text-decoration-line:underline;
            border: none;
            background-color: white;
            font-size: 20px;
            cursor: pointer;
        }

        .excluirPokedex{
        position: absolute;
        left: 1600px;
        top: 80px;
        cursor: pointer;
        }
    
`