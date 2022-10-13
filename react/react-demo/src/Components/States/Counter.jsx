import { useState } from 'react';

function Counter() {

    const [count, setCount] = useState();

    const history = [];

    // const handleChange = (event) => {
    //     setCount(event.target.value);
    //     history.push(count);
    //     console.log(history);
    // }

    const addHistory = () => {
        setCount(parseInt(count) + 1);
        history.push(count);
        console.log(history);        
    }

    return (
        <>
            <input type="number" value={count}  />
            <button onClick={addHistory}>Increment the Count my good fellow</button>
            <button onClick={() => setCount(parseInt(count) - 1)}>Decrement the Count my good fellow</button>
            <button onClick={() => setCount(42)}>Reset the Count to the Meaning of Life my good fellow</button>
            <p>This is the history {history.map(item => <div>{item}</div>)}</p>
        </>
    )
}

export default Counter;