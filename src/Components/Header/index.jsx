import { useState } from 'react'
import {Container} from './styles.js'
import './styles.css'

import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'
import { Link } from 'react-router-dom'




export function Header(){

  const [isClicked, setIsClicked] = useState(false)

  function handleDarkMode(){
    let element = document.body;
    element.classList.toggle('dark');
    setIsClicked(isClicked => !isClicked)
  }


  return(
    <Container>
      <h1>Prices cotation</h1>
      <ul className='menuNeutro'>
        <Link to="/dollar"><li>Dollar</li></Link>
        <Link to="/euro"><li>Euro</li></Link>
        <Link to="/bitcoin"><li>Bitcoin</li></Link>
      
      </ul>
      <abbr title='Click Dark mode'><button  className='dark-mode-btn' onClick={handleDarkMode}>{isClicked ? <BsFillMoonStarsFill className='IconDay'/> : <BsSun className='IconNight'/> }</button></abbr>
    </Container>
  )
}