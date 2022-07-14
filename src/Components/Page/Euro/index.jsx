import {EuroCotation} from '../../Coins/EuroCotation/index'
import { Header } from '../../Header/index'
import {Container} from './styles.js'

export function DashboardEuro(){



  return(
    <Container>
        <Header/>
        <EuroCotation/>
    </Container>
  )
}