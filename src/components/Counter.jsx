
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //hook to disptach a function in action
   const dispatch = useDispatch()


   const [range, setRange] = useState("")
  //component can access the state by using useselector hook
  const count = useSelector((state)=>state.counter.value)

  return (
   <>
      <div className='d-flex justify-content-center mt-5 align-items-center w-100 flex-column'>
          <h1 style={{fontSize:'90px'}}> {count} </h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-success p-3'>Decrement</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-primary p-3 ms-2'>Increment</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-3 ms-2'>Reset</button>
  
          </div>
          
      </div>
      <div>
        <input onChange={(e) => setRange(e.target.value)} type="text" className='form-control w-100 mt-3' placeholder="enter the range"/>
      </div>
   </>
  )
}

export default Counter