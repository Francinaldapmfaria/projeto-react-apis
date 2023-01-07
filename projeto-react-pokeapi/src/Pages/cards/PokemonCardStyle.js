import styled from 'styled-components'

export const Container= styled.div `
display: grid;
grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
/* justify-items: center; */


`

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


`
export const Button = styled.button`
display: flex;
position: absolute;
flex-direction: row;
justify-content: center;
align-items: center;
width: 146px;
height: 38px;
top: 151px;
left: 230px;
z-index: 2;
cursor: pointer;
border-radius: 12px;
`
export const Detalhes = styled.button `
 font-family: 'poppins';
    font-size: normal;
    font-weight: 700;
    font-size:16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #FFFFFF;
    position: absolute;
    top: 160px;
    left:20px;
    z-index: 2;
    background: none;
    border: none;
    width: 10px;
    height:24px ;
`

