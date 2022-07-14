import styled from "styled-components";

import {SiBitcoinsv} from 'react-icons/si'

export const Container = styled.div`
width: 100%;
height: 33%;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
background-color: #775253;
margin-top: 13px;

.total{

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

.graficoPorcent{
    display: flex;
    width: 40%;
    height: 100%;
    margin-top: 5px;

    ul{
      margin-top: 10px;
      list-style: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;


      p{
        font-size: 16px;
        display: flex;
        justify-content: center;
        width: 100%;
        color: #fff;
        margin-bottom: 10px;
        align-items: flex-start;
        justify-content: flex-start;
      }

      li{ 
        display: flex;
        flex-direction: column;
        color: #351431;
        margin-top: 2.5px;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 2px;
        font-family: 'Poppins', sans-serif;
      }
    }
  }

  .grafico{
    display: flex;
    width: 40%;
    height: 100%;
    margin-top: 5px;

     

    ul{
      margin-top: 10px;
      list-style: none;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 80px;
      


      p{
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        width: 50%;
        color: #fff;
        align-items: center;
        justify-content: center;
  
      }

      li{
        display: flex;
        flex-direction: column;
        color: #351431;
        margin-top: 2.5px;
        font-size: 15px;
        font-weight: 600;
        letter-spacing: 2px;
        align-items: center;
        
        font-family: 'Poppins', sans-serif;
      }
    }}
  }

.div-BTC{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


span{
  font-size: 3rem;
  color: #351431;
  text-transform: capitalize;
  margin-right: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;

} 

}.attBTC{
    color: #cfc101;
    font-size: 1.2rem;

  }


  .maxBTC{
   
    .IoMdArrowDropupCircle{
      color: white;
      width: 30px;
      height: 30px;

      &:hover{
        cursor: not-allowed;
      }
    }
   
  .max-BTC{
  color: #EF233C;
  font-size: 2rem;

  
  
  }
  }


.BTC{
  font-size: 4.5rem;
  display: flex;
  flex-direction: column;
  color: #A1FCDF;
  text-transform: capitalize;
  
}

.Atual{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  }

  .mindollar{
    h1{
      font-size: 20px;
      margin-top: 10px;
    }}

`
export const IconBitcoin = styled(SiBitcoinsv)`
  width: 8rem;
  height: 8rem;
  color: #9C914F;
  margin-top:10px;
  
`

