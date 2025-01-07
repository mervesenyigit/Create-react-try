import React, { useState } from 'react'
import Button from '././Button';

function BMICalcuator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState(null);

    const[status,setStatus]=useState("");

    function calculateBMI(e){
        e.preventDefault();
        
        const heightInMeters = height / 100;
        const calculatedBMI = weight / (heightInMeters * heightInMeters);
        setBMI(calculatedBMI.toFixed(2)); 

        if (calculatedBMI < 18.5) {
            setStatus("Underweight");
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            setStatus("Normal weight");
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            setStatus("Overweight");
        } else {
            setStatus("Obesity");
        }   
      setHeight("");
      setWeight("");

        return bmi;
    }

  return (
    <div>
       <h1 style={{ color:'#BAD94A' }} >BMI Calcuator</h1>
          <div>
            <form onSubmit={calculateBMI} id='form'> 
           
                <div>
                <input
                        type="number"
                        placeholder="Add Your Height "
                        name='Height'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        style={{ width: '70%', padding: '10px', marginRight: '10px', marginBottom:'20px'}}
                        />
                </div>
                <div>
                <input
                    type="number"
                    placeholder="Add Your Weight"
                    name='Weight'
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    style={{ width: '70%', padding: '10px', marginRight: '10px', marginBottom:'20px' }}
            />
                </div>
          
      
           
            <Button onClick={calculateBMI} backgroundColor="#BAD94A"  color="white" cursor="pointer">
              Calculate
            </Button>
            </form>
            {bmi && (
          <div>
            <h2>Your BMI: {bmi}</h2>
            <h3>Status: {status}</h3>
          </div>
        )}
            
    </div>
    </div>
  )
}

export default BMICalcuator
