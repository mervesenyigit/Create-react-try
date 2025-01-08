import React, { useReducer } from 'react'
import Button from '././Button';



 function UseReducerExample() {

    const ACTIONS ={
        INCREAMENT :'increment',
        DECREMENT:'decrement'
    }
   function reducer(prevState,action)
   {

    switch (action.type) {
        case ACTIONS.INCREAMENT:
            return {number :prevState.number+1}
        case ACTIONS.DECREMENT:
            return {number :prevState.number-1}  
           
    
        default:
            return prevState;
    }
   }


    const[state,dispatch]=useReducer(reducer,{number:0})
    
  return (
    <div>
   <Button onClick={()=>dispatch({type:ACTIONS.INCREAMENT})}> + </Button>
   <p>{state.number}</p>
   <Button onClick={()=>dispatch({type:ACTIONS.DECREMENT})}> - </Button>
    </div>
  )
}
export default  UseReducerExample