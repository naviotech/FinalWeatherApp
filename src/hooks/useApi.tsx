import { useEffect, useState } from "react"
import { useUbication } from "./useUbication"
import { z } from 'zod'
import {Weather, WeatherHour, WeatherDay} from "../types"
import orderDay from "../logic/GrupDay.ts"
type DaysFormated = {
  day: string;
  mostFrequentCondition: string | null;
  averageTemp: number;
}
type WeatherHour = z.infer<typeof WeatherHour>
type Weather = z.infer<typeof Weather>
export type WeatherDay = z.infer<typeof WeatherDay>
const useApi = () => {
  const [infoDay, setInfoDay] = useState<DaysFormated[]>([])
  const [infoHour, setInfoHour] = useState<WeatherHour|null>(null)
  const [info , setInfo ] = useState<Weather|null>(null)
  const {ubication}= useUbication()
  
  useEffect(()=>{
    const existUbication= async()=>{
      if(ubication.latitude !== 0){
        try {
          const key = import.meta.env.VITE_API_KEY
          const url = `https://api.openweathermap.org/data/2.5/weather?&lang=es&lat=${ubication.latitude.toFixed(2)}&lon=${ubication.longitude.toFixed(2)}&appid=${key}&units=metric`
          const response = await fetch(url)
          if(!response.ok){
            throw new Error("http error");
            
          }
          const data = await response.json()
          const parsedData = Weather.parse(data)
          
          setInfo(parsedData)
        } catch (error) {
          console.log(error)
        }
        
      }

    }
    existUbication()
  },[ubication])

  useEffect(()=>{
    const dayPerHour= async()=>{
      if(ubication.latitude !== 0){
        try {
          const key = import.meta.env.VITE_API_KEY
          const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${ubication.latitude.toFixed(2)}&lon=${ubication.longitude.toFixed(2)}&appid=${key}&units=metric&lang=es`
          const response = await fetch(url)
          const data = await response.json()
          if(!response.ok){
            throw new Error("https error")
          }
          
          orderDay(data.list)

          const dataHour = data.list.slice(0,9)
          const parseHour = WeatherHour.parse(dataHour)
          setInfoHour(parseHour)


          const dataDay = WeatherDay.parse(data.list)
          const dataFormated = orderDay(dataDay)
          if(dataFormated !== undefined){
            setInfoDay(dataFormated)
          }
          
        } catch (error) {
          console.error(error)
        }
        
      }

    }
    dayPerHour()
  },[ubication])


  return {
    info,
    infoHour,
    infoDay
  }
    
}

export default useApi
