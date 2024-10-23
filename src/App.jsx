import React, { useState } from "react"
import ChildComponent from "./component/ChildComponent"
import ChangeContext from "./component/ChangeContext"
export const MyContext=React.createContext()

function App() {
  const [user,setUser]=useState('John')
  const value={user,setUser}
  return (
    <MyContext.Provider value={value}>
        <ChildComponent/>
        <ChangeContext/>
    </MyContext.Provider>
  )
}

export default App
