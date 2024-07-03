
import { WeatherDay } from "../hooks/useApi"
interface WeatherData {
  time: string;
  condition: number;
}

function averageWeather(array : WeatherDay){
  // Calculo tiempo
  const weatherDataFinally: WeatherData[] = []

  array.map((item) =>{
    weatherDataFinally.push({
      time: item.dt_txt.slice(0,10),
      condition: item.weather[0].id
    })
   })
  
   const conditionCounts: { [key: number]: number } = {};

  weatherDataFinally.forEach(entry => {
    if (conditionCounts[entry.condition]) {
      conditionCounts[entry.condition]++;
    } else {
      conditionCounts[entry.condition] = 1;
    }
  });

  let mostFrequentCondition : string|null = null
  let maxCount = 0;

  for (const condition in conditionCounts) {
    if (conditionCounts[condition] > maxCount) {
      mostFrequentCondition = condition;
      maxCount = conditionCounts[condition];
    }
  }
  //Calculo temperatura media
  const temp = array.reduce((acc, item )=> acc + item.main.temp,0)/array.length
  const averageTemp = Math.round(temp)

 return {mostFrequentCondition, averageTemp}
}

function average(array : WeatherDay){
 const date = new Date(array[0].dt_txt)
 const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
 const day = daysOfWeek[date.getDay()].slice(0,3)

 const {mostFrequentCondition, averageTemp} = averageWeather(array)
 

 return{day, mostFrequentCondition, averageTemp} 
}

export default function orderDay(array : WeatherDay) {
  const days : string[]= []

  array.map((item)=>{
    days.push(item.dt_txt.slice(0,10))
  })
  const set = new Set(days)
  const daysFinally = [...set]
  if(daysFinally.length === 5){
    const day1  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[0]).filter(item => +item.dt_txt.slice(11,13)>5)
    const day1Formated = average(day1)
    
    const day2  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[1])
    const day2Formated = average(day2)

    const day3  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[2])
    const day3Formated = average(day3)

    const day4  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[3])
    const day4Formated = average(day4)

    const day5  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[4])
    const day5Formated = average(day5)

    return [day1Formated, day2Formated, day3Formated, day4Formated, day5Formated]
  }
  if(daysFinally.length === 6){
    const day1  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[0]).filter(item => +item.dt_txt.slice(11,13)>5)
    const day1Formated = average(day1)
    
    const day2  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[1])
    const day2Formated = average(day2)

    const day3  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[2])
    const day3Formated = average(day3)

    const day4  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[3])
    const day4Formated = average(day4)

    const day5  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[4])
    const day5Formated = average(day5)

    const day6  = array.filter(item => item.dt_txt.slice(0,10) === daysFinally[5])
    const day6Formated = average(day6)

    return [day1Formated, day2Formated, day3Formated, day4Formated, day5Formated, day6Formated]
  }
  
}


