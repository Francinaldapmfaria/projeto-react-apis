import styled from "styled-components"

export const Main = styled.div`
padding-top: 50px;
min-height: 100vh;


.detalhes{
color: #FFFFFF;
font-family: Poppins;
font-size: 48px;
font-weight: 700;
line-height: 72px;
letter-spacing: 0em;
text-align: left;


         }
`

export const BigCard = styled.div`
display: flex;
    border-radius: 12px;
    height: 663px;
    width:190vh;
    margin-left: 100px;
    background-color: ${(props) => props.color};
    position: relative;
    color: white;
    padding-top:50px;
    border-radius: 37.89px;
    padding-left: 44px;
    left: 0px;
    top: 0px;
    gap: 30px;

    .pokeBola{
        position: absolute;
        width: 850px;
        left: 1000px;
        top: 10px;
    }

   .pokemonGrande{
   
    position: absolute;
    width: 400px;
    height: 400px;
    left: 155vh;
    top: -100px;
   }

   .idnomebig{
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-size: 60px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0em;
    text-align:left;
    position: absolute;
    right: 20%;

    
    }
    .pokeTipos{
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 20%;
        top: 30%;
      
    }


`
export const PokeFrenteCosta = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

.frente{
    
    background-color:#FFFFFF ;
    height: 282px;
    width: 282px;
    border-radius: 20px;
}
.costa{
    
    background-color: #FFFFFF;
    height: 282px;
    width: 282px;
    border-radius:20px;
   
}
`
export const StatsBar = styled.div`
display: flex;
flex-direction: column;
background-color: #FFFFFF;
height:590px ;
width: 400px;
top: 100px;
gap: 20px;
border-radius: 20px;


.tituloBasestats{
    display: flex;
    position: absolute;
    left: 378px;
    top: 60px;

    color: black;
    font-size: 30px;
}
`

export const CaixaBarras= styled.div`
display: flex;
flex-direction: row;
position: absolute;
left: 378px;
top: 120px;


 .numeroBarra{
    display: flex;
    flex-direction: column;
    color:black;
}


.nomesStats{
    display: flex;
    flex-direction: column;
    color: gray;
}

.tituloBasestats{
    color: black;

}

.total{
    border: 2px solid black;
    color: black;
}


`
export const Moves = styled.div`
display: flex;
flex-direction: column;
background-color: white;
color: black;
width: 300px;
height: 453px;
left: 771px;
top: 170px;
margin-top:150px ;
border-radius: 20px;

.tituloMoves{
    font-size: 20px;
    color: black;

}

.divmoves{
    display: flex;
    flex-direction: column;
    gap: 10px;


}

.textmoves{
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 150px;
height: 37px;
left: 814px;
top: 599px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;



}


`



