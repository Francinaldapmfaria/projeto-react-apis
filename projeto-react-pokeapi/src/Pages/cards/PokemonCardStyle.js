import styled from 'styled-components'

export const CardStyled= styled.div`
    display: flex;
    border-radius: 12px;
    height: 190px;
    width:390px;
    margin-left: 40px;
    background-color: ${(props) => props.color};
    position: relative;
    color: white;
    padding-top:10px;
       

.bulbassaur{
    position: absolute;
width: 193px;
height: 193px;
right:12px;
top: -52px;
z-index:1;

}

.pokebola{
z-index:0;
position: absolute;
right:-15px;
top: -62px;
}

.grassPoisson{
    position: absolute;
    left: 15px; //movimenta na tela
    top: 100px; //movimenta na tela
}

.NomeIdEsquerdo{
    position: absolute;
   left: 15px;
   top: 20px;
   font-weight:700;
   font-size:16px;
   line-height:39px;
}

.detalhes{
   
    font-family: 'poppins';
    font-size: normal;
    font-weight: 00;
    font-size:16px;
    line-height: 24px;
    text-decoration: underline;
    color: #FFFFFF;
   
    
}
 .botao{
    display: flex;
    position: absolute;
    top:75%;
    right:20%;  
 }   

  
`

