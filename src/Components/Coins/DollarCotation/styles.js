import styled from "styled-components";
import {AiFillDollarCircle} from 'react-icons/ai'

export const Container = styled.div`
width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: start;
flex-direction: column;
background-color: #775253;
margin-top: 13px;

.total{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;



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
      align-items: center;
      

      p{
        font-size: 16px;
        display: flex;
        justify-content: center;
        width: 100%;
        color: #fff;
        margin-bottom: 10px;
      }

      li{ 
    
        letter-spacing: 2px;
        display: flex;
        flex-direction: column;
        color: #351431;
        margin-top: 2.5px;
        font-size: 15px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
      }
    }
  }
}

.div-dollar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


span{
  font-size: 2.5rem;
  color: #351431;
  text-transform: capitalize;
  margin-right: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
} 

}.attDollar{
    color: #cfc101;
    font-size: 1.2rem;

  }


  .maxdollar{
   
    .IoMdArrowDropupCircle{
      color: white;
      width: 30px;
      height: 30px;

      &:hover{
        cursor: not-allowed;
      }
    }
   
  .max-dollar{
  color: #EF233C;
  font-size: 2rem;

  }
  }


.dollar{
  font-size: 4.5rem;
  display: flex;
  flex-direction: column;
  color: #A1FCDF;
  text-transform: capitalize;
  font-family: 'Roboto' ,sans-serif; 

  
  
}


.Atual{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  }

  .grafico{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;

     

    ul{
      margin-top: 10px;
      list-style: none;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p{
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        width: 100%;
        color: #fff;
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

  .mindollar{
    h1{
      margin-top: 20px;
      font-size: 20px;
    }
  }
`

export const IconDoll = styled(AiFillDollarCircle)`
  width: 9rem;
  height: 9rem;
  color: #0DB661;
  
 

`

