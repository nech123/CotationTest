import { Link } from 'react-router-dom'
import {Container} from './styles'


export function HomePage(){
  return(
    <Container>
      <div className="welcame">
        <h1>Bem Vindo ao Price Cotation</h1>
      </div>

      <div className="select">
        <h1>Selecione uma moeda</h1>
        <span>Lembrando que o valor é mostrado em real.</span>
      </div>

      <div className="select-cotation">
        <ul>
         <Link to="/dollar"> <li>Dollar</li></Link>
          <Link to="/euro"><li>Euro</li></Link>
          <Link to="/bitcoin"><li>Bitcoin</li></Link>
        </ul>
      </div>
      </Container>
  )
}