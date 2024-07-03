import { useContext } from "react";
import { UbicationContext } from "../context/contextUbi";

export const useUbication = () =>{
  const context = useContext(UbicationContext)
  return context
}