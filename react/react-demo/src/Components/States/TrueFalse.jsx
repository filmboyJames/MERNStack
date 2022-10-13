import { useState } from 'react';

function TrueFalse(){
    
    const [btn,setBtn] = useState(false); //Destructuring the array that is returned by useState as the button, and the function to set it (since functions can only return one thing, i.e. an array to return two things in this case)
    console.log(btn);

    return(
        <>
        <p>Value: {""+btn}</p>
        {
            btn?<p>TRUE</p>:<p>FALSE</p>
        }

        <button onClick={()=>setBtn(current=>!current)}>Click Me Mate</button>

        </>
    )
}

export default TrueFalse;