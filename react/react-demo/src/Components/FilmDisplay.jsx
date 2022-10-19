import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Film from './Film';

function FilmDisplay() {
  const [movie, setMovie] = useState('Dumbo');
  const [films, setFilms] = useState([]);

  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      const grab = await axios.get(`http://www.omdbapi.com/?apikey=faab278&s=${movie}`);
      console.log('RESPONSE: ', grab);
      setFilms(grab.data.Search);
      console.log(grab.data);
    } catch (err) {
      // err handling
    }
  };

  return (
    <label htmlFor="movieName">
      Name (multiple results possible):
      <input type="text" id="movieName" value={movie} onChange={(e) => setMovie(e.target.value)} />
      <button type="button" onClick={getMovie}>SEARCH</button>
      {
                films.map((film) => (
                  <div>
                    <Film
                      key={film.imdbID}
                      title={film.Title}
                      year={film.Year}
                      poster={film.Poster}
                      type={film.Type}
                    />
                    <button type="button" onClick={() => navigate(`/details/${film.imdbID}`)}>Details</button>

                  </div>

                ))
            }
    </label>
  );
}

export default FilmDisplay;
