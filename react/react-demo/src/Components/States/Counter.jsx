import { useState } from 'react';

function Counter() {

    const [counter, setCounter] = useState({
        count:0,
        history: []
    });

    const handleChange = (event) => {
        const newCount = parseInt(event.target.value);
        const newHistory = counter.history;
        newHistory.push(newCount);
        setCounter({
            count: newCount,
            history: newHistory
        })
    }

    const handleClick = (event) => {
        console.log(event);
        const countChange = parseInt(event.target.id);
        const newCount = counter.count + countChange;
        const newHistory = counter.history;
        newHistory.push(newCount);
        setCounter({
            count: newCount,
            history: newHistory
        })     
    }

    return (
        <>
            <input type="number" value={counter.count} onClick={handleChange} />
            <br></br>
            <button onClick={handleClick} id="1" >Increment the number my good man</button>
            <br></br>
            <button onClick={(handleClick) } id="-1">Be a good chap and decrement the number if you would</button>
            <br></br>
            <button onClick={() => setCounter(42)}>Reset the Count to the Meaning of Life my good fellow</button>
            <p>This is the history {counter.history.toString()}</p>
        </>
    )
}

export default Counter;