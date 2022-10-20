import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Film({
  title, poster, year, type,
}) {
  return (
    <Card>
      <Card.Img src={poster} alt="Poster" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`Year: ${year}
          Type: ${type}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Film;

Film.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
