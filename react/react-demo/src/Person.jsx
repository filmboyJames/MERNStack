function Person() {

    const address = {
        forename: "James",
        surname: "Stewart",
        line1: "Nationwide",
        line2: "The Shed",
        city: "Edinburgh"
    }

    return (
        <div>
          <p><b>{address.forename}</b></p>
          <h1>{address.surname}</h1>
          <p><u>{address.line1}</u></p>
          <h1>{address.line2}</h1>
          <h1>{address.city}</h1>
          <h1>{address.zip}</h1>
      </div>
    )
}

export default Person;