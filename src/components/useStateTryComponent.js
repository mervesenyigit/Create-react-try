import React, { useState } from 'react'

function useStateTryComponent() {
    const[plus,setPlus]=useState(0);
  return (
    <div>
      <p>{plus}</p>
      <button onClick={()=>setPlus(plus+1)}>+</button>
    </div>
  )
}

export default useStateTryComponent
