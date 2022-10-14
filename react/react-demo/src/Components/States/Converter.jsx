import {useState} from 'react';

function Converter() {
    const [miles, setMiles] = useState(0);
    const [km, setKm] = useState(0);
    
    const changeMiles = (event) => {
        console.log("EVENT: ", event);
        const newMiles = parseFloat(event.target.value) || "0";
        setMiles(newMiles);
        setKm(newMiles * 1.6);
    }

    const changeKm = (event) => {
        console.log("EVENT: ", event);
        const newKm = parseFloat(event.target.value) || "0";
        setKm(newKm);
        setMiles(newKm / 1.6);
    }

    return(
        <>
            <label>Miles:</label>
            <input type="text" value={miles} onChange={changeMiles}/>
            <br/>
            <label>Kilometres:</label>
            <input type="text" value={km} onChange={changeKm}/>
        </>
    )
}

export default Converter;