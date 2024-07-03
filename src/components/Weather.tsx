import useApi from "../hooks/useApi"
//import { prueba } from "../prueba"
import Complements from "./Complements";
import Search from "./Search";

const Weather = () => {

  const {info} = useApi()
  
  const getVideoSource = (weatherId : number, dt : number) => {
    const hour = +(new Date(dt * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})).slice(0,2)
    
    switch (weatherId) {
      // Grupo 2xx: Tormenta
      case 200:
      case 201:
      case 202:
      case 210:
      case 211:
      case 212:
      case 221:
      case 230:
      case 231:
      case 232:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/tormenta.mp4";
  
      // Grupo 3xx: Llovizna
      case 300:
      case 301:
      case 302:
      case 310:
      case 311:
      case 312:
      case 313:
      case 314:
      case 321:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/lluvia.mp4";
  
      // Grupo 5xx: Lluvia
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 511:
      case 520:
      case 521:
      case 522:
      case 531:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/lluvia.mp4";
  
      // Grupo 6xx: Nieve
      case 600:
      case 601:
      case 602:
      case 611:
      case 612:
      case 613:
      case 615:
      case 616:
      case 620:
      case 621:
      case 622:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/nubes.mp4";
      
      // Grupo 7xx: Atmósfera
      case 701:
      case 711:
      case 721:
      case 731:
      case 741:
      case 751:
      case 761:
      case 762:
      case 771:
      case 781:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/nubes.mp4";
  
      // Grupo 800: Claro
      case 800:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/claro.mp4";
  
      // Grupo 80x: Nubes
      case 801:
      case 802:
      case 803:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/nubesSol.mp4"
      
      case 804:
        if(hour>21 || hour<6){
          return "/video/noche.mp4"
        }
        return "/video/nubes.mp4";
    }
  }
  return (
    <>
      {info && (
        <div className="relative h-screen max-w-screen-lg lg:flex lg:flex-col lg:items-center lg:justify-center lg:pb-8">
          <video className="fixed top-0 left-0 w-full h-full object-cover " src={getVideoSource(info.weather[0].id, info.dt)} playsInline autoPlay loop muted ></video>
      
          <div className="relative top-0 left-0 w-full h-screen flex flex-col items-center gap-3 py-10 lg:pb-0">
            
            <section className="flex flex-col gap-3 py-10 lg:py-0 lg:w-full">
              <div className="flex justify-end">
                <Search/>
              </div>
              
              <h1 className="text-center text-3xl text-white">Mi ubicación</h1>
              <p className="text-center text-white capitalize">{info.name}</p>
              <div className="lg:flex lg:items-center lg:justify-center lg:gap-6">
                <p className="text-center text-6xl font-bold text-white lg:text-3xl">{info.main.temp.toFixed(0)}°</p>
                <div className="lg:flex lg:flex-col lg:justify-start">
                  <p className="text-center text-white capitalize lg:text-left">{info.weather[0].description}</p>
                  <div className="flex justify-center gap-3 text-white">
                    <p>Máx. {info.main.temp_max.toFixed(0)}°</p>
                    <p>Mín. {info.main.temp_min.toFixed(0)}°</p>
                  </div>
                </div>
              </div>
              
            </section>
            <Complements/>
          </div>
        </div>
      
      )}
      
      
    </>
  )
}

export default Weather
