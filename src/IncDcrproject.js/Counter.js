import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {

    let val = 0;

    const [value,setValue] = useState(val);

    function decValue(){
        var j = value;
        j-=1;
        setValue(j);
        console.log("Clicked");
    }
    function IncValue(){
        var j = value;
        j+=1;
        setValue(j);
        console.log("Clicked");
    }
    function ResetValue(){
        var j=0;
        setValue(j);
        console.log("Clicked");
    }
    


  return (
    <main className='counter'>

        <div className='counter_button'>
            
            <button onClick={decValue} >Decrement</button>
            <button onClick={ResetValue} >Reset</button>
            <button onClick={IncValue} >Increment</button>
            
            Count: {value}


        </div>

    </main>
  )
}

export default Counter