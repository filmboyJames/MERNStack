import axios from 'axios'
import { useState } from 'react'
import FilmRequestOutput from './FilmRequestOutput'

const FilmDisplay = () => {
  const [movie, setMovie] = useState('');
  const [films, setFilms] = useState([]);

    const getMovie = async () => {
        try {
          const grab = await axios.get("http://www.omdbapi.com/?apikey=faab278&s=" + movie);
          console.log("RESPONSE: ", grab);
          setFilms(grab.data.Search);
          console.log(grab.data);
        } catch (err) {

        }
    }

    return (
        <>

            <label htmlFor="movieName">Name (multiple results possible):
            <input type="text" id="movieName" value={movie} onChange={e => setMovie(e.target.value)} />
            <button type="button" onClick={getMovie}>SEARCH</button>
            {
                films.map((film) => (
                    <FilmRequestOutput
                        key={film.imdbID}
                        title={film.Title}
                        year={film.Year}
                        poster={film.Poster}
                        type={film.Type}
                    />
                ))
            }
            </label>
        </>
    )
}

export default FilmDisplay;
