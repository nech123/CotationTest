import {BitcoinCotation} from '../../Coins/BitcoinCotation/index'
import { Header } from '../../Header/index'
import {Container} from './styles.js'

export function DashboardBit(){



  return(
    <Container>
        <Header/>
        <BitcoinCotation/>
    </Container>
  )
}