/* eslint-disable no-console */
// Multi film search
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container } from 'react-bootstrap';
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
    <>
      <label htmlFor="movieName">
        Film Name (multiple results possible):
        <input type="text" id="movieName" value={movie} onChange={(e) => setMovie(e.target.value)} />
      </label>
      <Button variant="info" type="button" onClick={getMovie}>SEARCH</Button>
      <Container>
        <div className="row row-cols-3 g-4">
          {
                films.map((film) => (
                  <Col>
                    <Film
                      key={film.imdbID}
                      title={film.Title}
                      year={film.Year}
                      poster={film.Poster}
                      type={film.Type}
                    />

                    <Button variant="info" type="button" onClick={() => navigate(`/details/${film.imdbID}`)}>
                      Details
                    </Button>
                  </Col>

                ))
}
        </div>
      </Container>
    </>
  );
}

export default FilmDisplay;
