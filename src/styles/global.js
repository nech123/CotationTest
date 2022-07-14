import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  border-radius: 0.7rem;
}

html{
  @media(max-width: 1080px){
    font-size: 93.75%;
  }

  @media(max-width: 720px){

    body{
      font-size: 87.5%;
   
    }

  }

  @media(max-width: 440px){
    font-size: 63%;
 
  }
}

body{
  background: #EDF6F9;
  transition: 1s;
  --webkit-font-smoothing: antialiased;
  }

  @media(max-width: 1400px){
  .fixed-button{
    font-size: 30px;
    position: fixed;
    transition: 1s;
    margin-left: 1150px;
    border-radius: 50%;
    display: flex;
    color: white;
    background-color: #000;
  }}

  @media(min-width:1500px){
    .fixed-button{
      display: none;
    }
  }
    @media(max-width: 1400px){
  .fixed-buttonUp{
    font-size: 30px;
    position: fixed;
    transition: 1s;
    margin-left: 1150px;
    margin-top: -36px;
    border-radius: 50%;
    display: flex;
    color: white;
    background-color: #000;
  }}

  @media(min-width:1500px){
    .fixed-buttonUp{
      display: none;
    }
  }
`