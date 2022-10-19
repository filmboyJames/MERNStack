import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Film from './Film';

function FilmDetails() {
  const params = useParams();
  console.log(params.imdbID);
  const [film, setFilm] = useState();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const grab = await axios.get(`http://www.omdbapi.com/?apikey=faab278&i=${params.imdbID}`);
        console.log('RESPONSE: ', grab);
        setFilm(grab.data);
        console.log(grab.data);
      } catch (err) {
        // err handling
      }
    };
    getMovie();
  }, [params.imdbID]);

  return film && <Film title={film.Title} year={film.Year} type={film.Type} poster={film.Poster} />;
}

export default FilmDetails;
