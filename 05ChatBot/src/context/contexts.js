import { useContext, createContext } from "react";

export const msgContext = createContext()

export default function useMsg(){
  return useContext(msgContext)
} 

