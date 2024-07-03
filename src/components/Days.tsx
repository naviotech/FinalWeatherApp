import useApi from "../hooks/useApi"

const Days = () => {
  const {infoDay} = useApi()
  const handleSvg = (item:string|null)=>{
    if (item === null) return "/public/svg/1.svg";
    switch (+item) {
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
        return "/public/svg/3.svg";
  
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
        return "/public/svg/2.svg";
  
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
        return "/public/svg/2.svg";
  
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
        return "/public/svg/7.svg";
      
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
        return "/public/svg/6.svg";
  
      // Grupo 800: Claro
      case 800:
        return "/public/svg/4.svg";
  
      // Grupo 80x: Nubes
      case 801:
      case 802:
      case 803:
        return "/public/svg/1.svg"

      case 804:
        return "/public/svg/6.svg";
    }
  }
  return (
    <>
      <article className="flex flex-col gap-2 p-8 bg-gray-700/50 text-white rounded-xl opacity-80">
          {infoDay.map(item => (
            <div key={item.day} className="flex items-center justify-between">
              <div className="flex gap-16 items-center">
                <p>{item.day}</p>
                <img src={handleSvg(item.mostFrequentCondition)} alt="weather" />
              </div>
              <div className="flex gap-10 items-center">
                <p>{item.averageTemp}°</p>
                <img src="/public/svg/9.svg" alt="weather" />
              </div>
            </div>
          ))}
        
      </article>
      
    </>
  )
}

export default Days
