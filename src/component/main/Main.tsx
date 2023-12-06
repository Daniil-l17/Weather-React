import { appSliceWeather } from "../../hooks/appSlice"

const Main = () => {

  const state = appSliceWeather(state => state.weather.weather)


  const imgDet = state.degrees < -8 ? './../../../src/img/mainly_cloudy.svg' : state.degrees > 5 ? './../../../src/img/Group.png' : state.degrees > 15 ? './../../../src/img/small_rain_sun.svg' : './../../../src/img/small_rain.svg'


  return (
    <section className="-z-20 flex justify-between gap-12">

      <div style={{boxShadow: '2px 5px 25px -3px rgba(180, 180, 180, 0.25)'}} className="bg-[#4F4F4F] box rounded-lg px-5 py-5 w-2/6">
        <div className="flex justify-between items-center">
          <div>
          <h1 className="text-[#4793FF] text-8xl">{Math.round(state.degrees)}°</h1>
          <p className=" text-5xl ">Сегодня</p>
          </div>
          <img src={imgDet} width={300} alt="" />
        </div>
        <h4 className="text-[#939CB0] text-2xl mt-7">Город: <span>{state.city}</span></h4>
      </div>


      <div  style={{boxShadow: '2px 5px 25px -3px rgba(180, 180, 180, 0.25)'}} className="bg-[#4F4F4F] rounded-lg px-8 py-10 w-3/5 relative">
      <ul className="flex flex-col gap-7">
        <li className="flex gap-8 items-center">
          <div style={{boxShadow: '1px 4px 10px rgba(71, 147, 255, 0.20)'}} className=" w-8 h-8 flex items-center justify-center  rounded-3xl bg-white "><img src="./../../../src/img/thermometer 1.png" alt="" /></div>
          <p className="text-[#939CB0] text-sm">Температура</p>
          <h6 className="text-sm">{Math.round(state.degrees)}° - ощущается как <span>{Math.round(state.degreesDetail)}°</span></h6>
        </li>
        <li className="flex gap-8 items-center">
          <div className=" w-8 h-8 flex items-center justify-center  rounded-3xl bg-white "><img src="./../../../src/img/humidity 1.png" alt="" /></div>
          <p className="text-[#939CB0] text-sm">Давление</p>
          <h6 className="text-sm">{state.pressure} мм ртутного столба - нормальное</h6>
        </li>
        <li className="flex gap-8 items-center">
          <div className=" w-8 h-8 flex items-center justify-center  rounded-3xl bg-white "><img src="./../../../src/img/evaporator 1.png" alt="" /></div>
          <p className="text-[#939CB0] text-sm">Влажность</p>
          <h6 className="text-sm">{state.humidity}%</h6>
        </li>
        <li className="flex gap-8 items-center">
          <div className=" w-8 h-8 flex items-center justify-center  rounded-3xl bg-white "><img src="./../../../src/img/wind 1.png" alt="" /></div>
          <p className="text-[#939CB0] text-sm">Ветер</p>
          <h6 className="text-sm">{state.wind} м/с юго-запад - легкий ветер</h6>
        </li>
      </ul>
      <img className="absolute top-0 right-0" src="./../../../src/img/Cloud image.png" alt="" />
      </div>


    </section>
  )
}

export default Main