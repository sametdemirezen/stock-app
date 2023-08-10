
import { createContext } from 'react'

export const authApiContext = createContext();



const authApiContextProvider = ({children}) => {
  return (
    <authApiContext.Provider value={{data}}>

    </authApiContext.Provider>
  )
}

export default authApiContext