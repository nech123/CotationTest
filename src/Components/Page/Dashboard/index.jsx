import { DollarCotation} from '../../Coins/DollarCotation/index.jsx'
import { Header } from '../../Header/index.jsx'
import {Container} from './styles.js'

export function DashboardDollar(){



  return(
    <Container>
        <Header/>
        <DollarCotation/>
    </Container>
  )
}