import {z} from'zod'
export const Weather = z.object({
  name: z.string(),
  visibility: z.number(),
  clouds: z.object({all: z.number()}),
  main: z.object({feels_like: z.number(), humidity: z.number(),sea_level: z.number(), temp:z.number(),temp_max:z.number(), temp_min:z.number()}),
  sys: z.object({country: z.string(), sunrise: z.number(), sunset: z.number()}),
  weather: z.array(z.object({id: z.number(), main: z.string(), description: z.string()})),
  wind: z.object({speed: z.number(),deg: z.number()}),
  dt: z.number()
})

export const WeatherHour = z.array(z.object({
  dt: z.number(),
  dt_txt: z.string(),
  main: z.object({temp: z.number()}),
  weather: z.array(z.object({id: z.number()}))
}))

export const WeatherDay = z.array(z.object({
  dt: z.number(),
  dt_txt: z.string(),
  main: z.object({temp: z.number(), temp_max: z.number(), temp_min: z.number()}),
  weather: z.array(z.object({id: z.number()}))
}))