function Person(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default Person;