import { useState } from 'react';

function Logging() {

    const [btn, setBtn] = useState(true);
    if(btn===true){
        return (
            <>
            <h1>Please sign up!</h1>
                <button onClick={() => setBtn(current => !current)}>Login</button>
            </>
        )

    } else{
    return (
        <>
            <h1>Welcome Back!</h1>
            <button onClick={() => setBtn(current => !current)}>Logout</button>
        </>
    )}
}

export default Logging;