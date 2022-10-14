import sampleData from '../../sampleData.json';
import Person from './Person.jsx'

function Subcontent() {
    return (
    <>
    {sampleData.map(person => (
        <Person key={person.id} name = {person.name} city = {person.address.city}/>
    ))}
    </>
)

}

export default Subcontent;