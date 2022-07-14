import styled from "styled-components";



export const Container = styled.div`
display: flex;
height: 100%;
flex-direction: column;
margin: 0 auto;
justify-content: center;
gap: 10px;
background-color: #6B2737;

.welcame{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
}

.select{
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 60px;
  }

  span{
    color: green;
    margin-top: 10px;
  }
}

.select-cotation{

  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  ul{
    list-style: none;
    font-size: 40px;
    margin-top: 200px;

    li{
      margin-top: 30px;
      color: white;

      &:hover{
        filter: brightness(0.6);
      }

    }


    a{
        text-decoration: inherit;
      }
  }
}


`