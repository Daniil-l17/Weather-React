import Header from '../component/Header/Header'
import Main from '../component/main/Main'
import style from './../style/home.module.scss'
import {useState} from 'react'

const Home = () => {
  const city = ['Москва','Сургут','Краснодар','Санкт-Петербург','Екатеринбург','Владивосток','Сочи','Ялта','Оренбург','Омск']
  const [active,setActive] = useState(-1)

  return (
    <div  className={style.mn}>
      <div className={style.container}>
      <Header active={active} setActive={(id:number) => setActive(id)} city={city} />
      <Main/>
    </div>
    </div>
  )
}

export default Home