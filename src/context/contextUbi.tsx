import React, { ReactNode, createContext, useState} from "react";

export type ubicationType = {
  latitude: number,
  longitude: number
}

type UbicationContextType ={
  ubication: ubicationType
  setUbication: React.Dispatch<React.SetStateAction<ubicationType>>
}
type UbicationProviderProps ={
  children: ReactNode
}

export const UbicationContext = createContext<UbicationContextType>({
  ubication: {
    latitude: 0,
    longitude: 0
  },
  setUbication: (): void =>{}
})

export const UbicationProvider= ({children }: UbicationProviderProps) =>{
  const [ubication, setUbication] = useState({latitude: 0, longitude:0})

  return(
    <UbicationContext.Provider value={{ubication, setUbication}}>
      {children}
    </UbicationContext.Provider>
  )
}