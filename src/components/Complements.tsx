//import { prueba } from "../prueba"

import useApi from "../hooks/useApi"
import WindDirection from "./ArrowWindy"
import Days from "./Days"
import Hour from "./Hour"

const Complements = () => {
  const {info} = useApi()
  
  return (
    <>
    {info && (
      <article className="flex flex-col gap-2 mt-12 mb-12 p-2 lg:grid lg:grid-cols-2 lg:mt-3">
        <div className="flex flex-col gap-2">
          <Hour/>
          <Days/>
          <section className="flex gap-2">
            <section className="p-8 bg-gray-700/50 text-white rounded-xl opacity-80 w-full">
              <div className="flex items-center gap-2 mb-2">
                <img src="../../public/svg/12.svg" alt="" className="w-7" />
                <h2 className="text-white/60 text-xs">SALIDA DE SOL</h2>
              </div>
              <p className="text-2xl">{new Date(info.sys.sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
            </section>
            <section className="p-8 bg-gray-700/50 text-white rounded-xl opacity-80 w-full">
              <div className="flex items-center gap-2 mb-2">
                <img src="../../public/svg/11.svg" alt="" className="w-7" />
                <h2 className="text-white/60 text-xs">PUESTA DE SOL</h2>
              </div>
              <p className="text-2xl">{new Date(info.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
            </section>
          </section>
        </div>
      
        <div className="flex flex-col gap-2 lg:h-full">
          <section className="p-8 bg-gray-700/50 text-white rounded-xl opacity-80">
            <div className="flex items-center gap-2 mb-2">
              <img src="../../public/svg/5.svg" alt="" className="w-7" />
              <h2 className="text-white/60 text-xs">VIENTO</h2>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <p className="text-2xl">{(info.wind.speed * 3.6).toFixed(0)}</p>
                <p className="text-white/60">km/h</p>
              </div>
              <WindDirection direction={info.wind.deg}/>
            </div>
          </section>
        
          <section className="flex gap-2">
            <section className="p-8 bg-gray-700/50 text-white rounded-xl opacity-80 w-full">
              <div className="flex items-center gap-2 mb-2">
                <img src="../../public/svg/10.svg" alt="" className="w-7" />
                <h2 className="text-white/60 text-xs">VISIBILIDAD</h2>
              </div>
              <p className="text-2xl">{info.visibility/1000} km</p>
            </section>
            <section className="p-8 bg-gray-700/50 text-white rounded-xl opacity-80 w-full">
              <div className="flex items-center gap-2 mb-2">
                <img src="../../public/svg/8.svg" alt="" className="w-7" />
                <h2 className="text-white/60 text-xs">HUMEDAD</h2>
              </div>
              <p className="text-2xl">{info.main.humidity} %</p>
            </section>
          </section>

          <section className="p-8 bg-gray-700/50 text-white rounded-xl opacity-80 mb-12 lg:h-full lg:mb-0 lg:flex lg:flex-col lg:justify-center">
            <div className="flex items-center gap-2 mb-4">
              <img src="../../public/svg/9.svg" alt="" className="w-7" />
              <h2 className="text-white/60 text-xs">SENSACIÓN</h2>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2">
                <p className="text-4xl">{info.main.feels_like.toFixed(0)}</p>
                <p className="text-white/60">°</p>
              </div>
            </div>
          </section>
        </div>
      

    </article>
    )}
    </>
    
  )
}

export default Complements
