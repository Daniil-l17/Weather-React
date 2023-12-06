import { CgChevronDown } from "react-icons/cg";
import style from './../../style/home.module.scss'
import {useEffect, useState} from 'react'
import {FC} from 'react'
import {useDispatch} from 'react-redux'
import { actions } from "../../redux/slice/Slice";
import { useLazyWatherApiAddQuery,useLazyWatherPodsQuery} from "../../api/api";

  interface citis {
    city: string [],
    active: number,
    setActive: (id:number) => void
  }

const Header:FC<citis> = ({city,setActive,active}) => {
  const [fetchRepos,{data}] = useLazyWatherApiAddQuery()
  const [fetchRepor,{data:result}] = useLazyWatherPodsQuery()
  
  const lat = data?.map((el) => el.lat)
  const lon = data?.map((el) => el.lon)
  

  const dbWather = useDispatch()
  
  
  const db = useDispatch()
  const [open,setOpen] = useState(false)

  
  const addInf = (elem:string,id:number) => {
    setOpen(false)
    setActive(id)
    fetchRepos(elem)
          db(actions.weatherInfo(elem))
    /*      dbWather(actions.addwatherInfo(result))*/
  }

  
  useEffect(() => {
    fetchRepor({lat,lon})
  },[data])
  
  dbWather(actions.addwatherInfo(result))

  return (
    <header className=" pt-5 pb-8 flex justify-between items-center">
      <div className="flex gap-5 items-center cursor-pointer">
      <img src="./../../../src/img/logo.svg" alt="" />
      <h1 className=" text-2xl text-[#4793FF] font-bold uppercase ">React weather</h1>
      </div>
      <div className=" relative py-2 px-5 rounded-lg flex items-center justify-center bg-[#4F4F4F]">
        <div onClick={() => setOpen(prev => !prev)} className="flex cursor-pointer items-center gap-3">
        <h3 className=" font-medium ">Выбрать город</h3>
        <CgChevronDown /> 
        </div>
        {open ? <div className="top-9 absolute bg-[#4F4F4F] py-3 px-5 rounded-lg w-full z-40">
          <ul className="flex flex-col gap-3">
          {city.map((el,id) =>
            <li key={id} onClick={() => addInf(el,id)} className={active === id ? style.active : style.vzd}>{el}</li>
            )}
          </ul>
          </div> : null}
      </div>
    </header>
  )
}

export default Header