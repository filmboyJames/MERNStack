const GameRoom = ({ players }) => {
    const Display = ({ playerName }) => <li> {playerName}</li>
    console.log(players);
    return (
        <ul className="previousSearch">
            {players.map((playerName, i) => (
                <Display key={i} playerName={playerName} />
            ))}
        </ul>
    );
}

export default GameRoom;