import "./frame.css"
import React, {useState} from 'react';


const Frame = (props) => {
    const [title,setTitle] = useState(props.name);
    function handleEvevent(){
        setTitle("popcorn");
    }
    // const title = props.name;
    return(
        <div className="frame">
            <div className="Product">
                <div className="date">
                    {title}
                </div>
                <button onClick={handleEvevent}>Click here</button>
            </div>
        </div>
    );
}

export default Frame;




// const [title,valueKoUpdateKrneWalaFunction] useState(kis value se initalize krna h )

