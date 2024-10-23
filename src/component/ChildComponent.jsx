import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

const ChildComponent = () => {
    const {user}=useContext(MyContext)
    // const context=useContext(MyContext)
  return (
    <div>
        ChildComponent
        User:{user}
    </div>
  )
}

export default ChildComponent