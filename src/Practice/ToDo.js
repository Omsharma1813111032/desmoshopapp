import React, { useState } from 'react'
import "./todo.css"
// import data from './data'

const ToDo = (props) => {

    const [title,setTitle] = useState(props.title);
    
    function changeTitle(){
        console.log("Hi");
        setTitle("PopCorn");
    }


  return (
        <div className='outter'>
            <div className="datePractice">
                <div className='date1'>
                    {props.month}<br />{props.year}<br/>{props.date}
                </div>
            </div>
            <div className='title'>
                {title}<br/> 
                <button onClick={changeTitle}>Click here</button>
            </div>
        </div>
  )
}

export default ToDo