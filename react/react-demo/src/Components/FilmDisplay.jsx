import axios from 'axios';
import { useEffect, useState } from "react";
import FilmRequestOutput from './FilmRequestOutput';

const FilmDisplay = () => {

    const [movie, setMovie] = useState();
    const [search, setSearch] = useState("Donnie Darko");

    useEffect(() => {
        const getMovie = async () => {
            try {
                const grab = await axios.get("http://www.omdbapi.com/?apikey=faab278&s=" + search);
                console.log("RESPONSE: ", grab);
                setMovie(grab.data);
                console.log(grab.data);
            } catch (err) {
                console.error("This is an error");
            }
        }
        getMovie();
    }, [search]);

    return (
        <>
            
            <label htmlFor="movieName">Name:</label>
            <input type="text" id="movieName" value={search} onChange={e => setSearch(e.target.value)}/>
            <FilmRequestOutput Title = {movie.Title} Year = {movie.Year} Rated = {movie.Rated} />
        </>
    )

}

export default FilmDisplay;
