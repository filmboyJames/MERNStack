// Single request search

import axios from 'axios';
import { useEffect, useState } from 'react';

function FilmRequest() {
  const [movie, setMovie] = useState();
  const [search, setSearch] = useState('The Matrix');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const grab = await axios.get(`http://www.omdbapi.com/?apikey=faab278&t=${search}`);
        console.log('RESPONSE: ', grab);
        setMovie(grab.data);
        console.log(grab.data);
      } catch (err) {
        // error handling
      }
    };
    getMovie();
  }, [search]);

  if (movie) {
    return (
      <>
        <label htmlFor="movieName">
          Name:
          <input type="text" id="movieName" value={search} onChange={(e) => setSearch(e.target.value)} />
        </label>
        {/* <button onClick={e => setSearch(e.target.value)}>Submit Search</button> */}
        <h2>{movie.Title}</h2>
        <img style={{ float: 'left' }} src={movie.Poster} alt="Poster" />
        <section>
          <p>
            Title:
            {movie.Title}
          </p>
          <p>
            Year:
            {movie.Year}
          </p>
          <p>
            Rated:
            {movie.Rated}
          </p>
        </section>
      </>
    );
  }
}

export default FilmRequest;
