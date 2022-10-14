import {useState} from 'react';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {

    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const newPlayer = ({target}) => {
        setPlayerName(target.value);
        console.log(target.value);
    } 

    const submitForm = (event) => {
        event.preventDefault();
        console.log(event);
    }

    const handleAdd = () => {
        setPlayers( players => [...players, playerName]);
    }
    
    return(
        <>
        <AddGamers newPlayer={newPlayer} submitHandler={submitForm} handleAdd={handleAdd}/>
        <GameRoom players={players}/>

        </>
    )
}

export default Game;