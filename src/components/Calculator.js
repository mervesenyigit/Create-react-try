import React, { useEffect, useRef,useState } from 'react'
import Button from './../components/Button';



function Calculator() {
    
    const[result,setResult]=useState(0);

    const inputRef = useRef(null);
    const resultRef = useRef(null);
    
    useEffect(()=>  {
      inputRef.current.focus();
     })
    

    function handleAddition() {
        const currentValue = Number(inputRef.current.value); 
        setResult((prevResult) => prevResult + currentValue); 
        inputRef.current.value = '';
      }
      function handleSubtraction () {
        const currentValue = Number(inputRef.current.value); 
        setResult((prevResult) => prevResult - currentValue); 
        inputRef.current.value = '';
      }    
      function handleMultiplication () {
        const currentValue = Number(inputRef.current.value); 
        setResult((prevResult) => prevResult * currentValue); 
        inputRef.current.value = '';
      }
      function handleDivision () {
        const currentValue = Number(inputRef.current.value); 
        setResult((prevResult) => prevResult / currentValue); 
        inputRef.current.value = '';
      }
     const resetInput =()=>{
     
       inputRef.current.value = 0 ;
    
     }
     const resetResult =()=>{
       setResult((prevResult) => prevResult * 0); 
        
      }
        
      
      
  return (
    

    <div>
     
        <div className='inputResultContent'>
        <p ref={resultRef}>{result}</p>

       <input  
          className="inputContent" 
          ref={inputRef} 
          type="number" 
          placeholder='Type a number' 
         
       />
       
        </div>
        <div className='buttonContent'>
        <Button backgroundColor="#04BFBF" color="white" onClick={handleAddition}>Add</Button>
      <Button backgroundColor="#BAD94A"  color="white" onClick={handleSubtraction}>Subtract</Button>
      <Button backgroundColor="#F2E205"  color="white" onClick={handleMultiplication}>Multiply</Button>
      <Button backgroundColor="#F2BB77"  color="white" onClick={handleDivision}>Divide</Button>
      <Button backgroundColor="#F26430"  color="white" onClick={resetInput}>Reset Input</Button>
      <Button backgroundColor="#80BFB4"  color="white" onClick={resetResult}>Reset Result</Button>
          </div>
    
      
    
      
    </div>
  )
}

export default Calculator
