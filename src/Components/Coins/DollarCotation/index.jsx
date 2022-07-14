import axios from 'axios'
import { useEffect, useState } from 'react'
import {Container, IconDoll} from './styles.js'
import {BsArrowUpRight, BsArrowDownLeft} from 'react-icons/bs'
export function DollarCotation(){

  const [DRL, setDRL] = useState('null')
  const [DRLmax, setDRLmax] = useState('null')
  const [DRLmin, setDRLmin] = useState('null')
  const [lastAtt, setLastAtt] = useState('Espere')
  const [nameMoeda, setNameMoeda] = useState('Esperando')

  const getData = async() =>{
    const res = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    setDRL(res.data.USDBRL.ask)
    setDRLmax(res.data.USDBRL.high)
    setLastAtt(res.data.USDBRL.create_date)
    setNameMoeda(res.data.USDBRL.name)
    setDRLmin(res.data.USDBRL.low)
  }

  const [day1, setDay1] = useState('Esperando')
  const [day2, setDay2] = useState('Esperando')
  const [day3, setDay3] = useState('Esperando')
  const [day4, setDay4] = useState('Esperando')
  const [day5, setDay5] = useState('Esperando')
  const [day6, setDay6] = useState('Esperando')
  const [day7, setDay7] = useState('Esperando')
  const [day8, setDay8] = useState('Esperando')
  const [day9, setDay9] = useState('Esperando')
  const [day10, setDay10] = useState('Esperando')
  const [day11, setDay11] = useState('Esperando')
  const [day12, setDay12] = useState('Esperando')
  const [day13, setDay13] = useState('Esperando')
  const [day14, setDay14] = useState('Esperando')
  const [day15, setDay15] = useState('Esperando')

  const getDays = async() =>{
    const days = await axios.get('https://economia.awesomeapi.com.br/json/daily/USD-BRL/20', 
    { params:{USDBRL: [1]}})
       setDay1(days.data[1].ask)
       setDay2(days.data[2].ask)
       setDay3(days.data[3].ask)
       setDay4(days.data[4].ask)
       setDay5(days.data[5].ask)
       setDay6(days.data[6].ask)
       setDay7(days.data[7].ask)
       setDay8(days.data[8].ask)
       setDay9(days.data[9].ask)
       setDay10(days.data[10].ask)
       setDay11(days.data[11].ask)
       setDay12(days.data[12].ask)
       setDay13(days.data[13].ask)
       setDay14(days.data[14].ask)
       setDay15(days.data[15].ask)

       setDay1por(days.data[1].pctChange)
       setDay2por(days.data[2].pctChange)
       setDay3por(days.data[3].pctChange)
       setDay4por(days.data[4].pctChange)
       setDay5por(days.data[5].pctChange)
       setDay6por(days.data[6].pctChange)
       setDay7por(days.data[7].pctChange)
       setDay8por(days.data[8].pctChange)
       setDay9por(days.data[9].pctChange)
       setDay10por(days.data[10].pctChange)
       setDay11por(days.data[11].pctChange)
       setDay12por(days.data[12].pctChange)
       setDay13por(days.data[13].pctChange)
       setDay14por(days.data[14].pctChange)
       setDay15por(days.data[15].pctChange)

  }


  const [day1por, setDay1por] = useState('Esperando')
  const [day2por, setDay2por] = useState('Esperando')
  const [day3por, setDay3por] = useState('Esperando')
  const [day4por, setDay4por] = useState('Esperando')
  const [day5por, setDay5por] = useState('Esperando')
  const [day6por, setDay6por] = useState('Esperando')
  const [day7por, setDay7por] = useState('Esperando')
  const [day8por, setDay8por] = useState('Esperando')
  const [day9por, setDay9por] = useState('Esperando')
  const [day10por, setDay10por] = useState('Esperando')
  const [day11por, setDay11por] = useState('Esperando')
  const [day12por, setDay12por] = useState('Esperando')
  const [day13por, setDay13por] = useState('Esperando')
  const [day14por, setDay14por] = useState('Esperando')
  const [day15por, setDay15por] = useState('Esperando')

  useEffect(()=>{
    getDays()
  }, [])
  useEffect(() =>{
    getData()
  },[])

  return(
    <Container>
      <div className="Atual">
      <IconDoll/>
      <span className='attDollar'>(Ultima atualização as: {lastAtt})</span>
      <div className='div-dollar'>
      
      <span>{nameMoeda} </span>
      <span className='dollar'>{new Intl.NumberFormat('pt-BR', {
                  style:'currency',
                  currency: 'BRL'
                }).format(DRL)}
                 
                 </span>
                 
  </div>
      <div className="maxdollar">

      <BsArrowUpRight className='IoMdArrowDropupCircle'/><span className='max-dollar'> Valor maximo hoje: {new Intl.NumberFormat('pt-BR', {
                  style:'currency',
                  currency: 'BRL'
                }).format(DRLmax)} </span>
                </div>

          <div className='mindollar'>
                <BsArrowDownLeft className='IoMdArrowDropupCircle'/><span className='max-dollar'> Valor minimo hoje: {new Intl.NumberFormat('pt-BR', {
                  style:'currency',
                  currency: 'BRL'
                }).format(DRLmin)} </span>
                <h1>Ultimas Cotações</h1>
                </div>
                </div>
                
                <div className="total">
                  
                <div className="grafico">
                  <ul>
                    <p>Fechou</p>
                    <li>1 dia atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day1)}</li>
                    <li>2 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day2)}</li>
                    <li>3 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day3)}</li>
                    <li>4 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day4)}</li>
                    <li>5 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day5)}</li>
                    <li>6 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day6)}</li>
                    <li>7 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day7)}</li>
                    <li>8 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day8)}</li>
                    <li>9 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day9)}</li>
                    <li>10 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day10)}</li>
                    <li>11 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day11)}</li>
                    <li>12 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day12)}</li>
                    <li>13 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day13)}</li>
                    <li>14 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day14)}</li>
                    <li>15 dias atrás: {new Intl.NumberFormat('pt-BR', { style:'currency',currency: 'BRL' }).format(day15)}</li>
                  </ul>
                </div>

                <div className="graficoPorcent">
                  
                  <ul>
                    <p>Porcentagem de Valorização</p>
                    <li>1 dia atrás: {day1por}%</li>
                    <li>2 dias atrás: {day2por}%</li>
                    <li>3 dias atrás: {day3por}%</li>
                    <li>4 dias atrás: {day4por}%</li>
                    <li>5 dias atrás: {day5por}%</li>
                    <li>6 dias atrás: {day6por}%</li>
                    <li>7 dias atrás: {day7por}%</li>
                    <li>8 dias atrás: {day8por}%</li>
                    <li>9 dias atrás: {day9por}%</li>
                    <li>10 dias atrás: {day10por}%</li>
                    <li>11 dias atrás: {day11por}%</li>
                    <li>12 dias atrás: {day12por}%</li>
                    <li>13 dias atrás: {day13por}%</li>
                    <li>14 dias atrás: {day14por}%</li>
                    <li>15 dias atrás:   {day15por}%</li>

                  </ul>
                </div>
                </div>
    </Container>
  )
}