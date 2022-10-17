const FilmRequestOutput = (props) => {
    
        return (
            <>
            
                <h2>{props.Title}</h2>
                <img style={{float: "left"}} src={props.Poster} alt="Poster"/>
                <section>
                    <p>Title: {props.Title}</p>
                    <p>Year: {props.Year}</p>
                    <p>Rated: {props.Rated}</p>
                </section>
            </>
        )
    }

export default FilmRequestOutput;