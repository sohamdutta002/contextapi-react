import React,{useContext,useState} from 'react'
import { MyContext } from '../App'

const ChangeContext = () => {
    const {setUser}=useContext(MyContext)
    const [value,setValue]=useState('')
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleSubmit=()=>{
        setUser(value)
    }
  return (
    <div className='p-4 text-xl'>
        ChangeContext
        <input type='text' className='bg-gray-300 p-2 rounded-lg' placeholder='Change the context value' value={value} onChange={handleChange}/>
        <button onClick={handleSubmit} className='bg-blue-500 ml-2 p-2 rounded-lg'>Update User</button>
    </div>
  )
}

export default ChangeContext