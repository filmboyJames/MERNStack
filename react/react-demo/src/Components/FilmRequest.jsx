import axios from "axios";
import { useEffect, useState } from "react";

const MovieRequest = () => {

    const [movie, setMovie] = useState();
    const [search, setSearch] = useState();


    useEffect(() => {
        const getMovie = async () => {
            try {
                const grab = await axios.get("http://www.omdbapi.com/?apikey=faab278&t=" + search);
                console.log("RESPONSE: ", grab);
                setMovie(grab.data);
            } catch (err) {

            }
        }
        getMovie();
    }, [search]);

    if (movie) {
        return (
            <>
            <label htmlFor="movieName">Name:</label>
                <input type="text" id="movieName" value={search} onChange={e => setSearch(e.target.value)} />
                <h2>{movie.title}</h2>
                <img style={{float: "left"}} src={movie.poster} alt="Poster"/>
                <section>
                    <p>Title: {movie.title}</p>
                    <p>Year: {movie.year}</p>
                    <p>Rated: {movie.rated}</p>
                </section>
            </>
        );
    }
}

export default MovieRequest;