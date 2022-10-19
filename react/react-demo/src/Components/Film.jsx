import PropTypes from 'prop-types';

function Film({
  title, poster, year, type,
}) {
  return (
    <>

      <h2>{title}</h2>
      <section>
        <img style={{ float: 'left', width: '100px' }} src={poster} alt="Poster" />
        <p>
          Title:
          {' '}
          {title}
        </p>
        <p>
          Year:
          {' '}
          {year}
        </p>
        <p>
          Type:
          {' '}
          {type}
        </p>
      </section>
    </>
  );
}

export default Film;

Film.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
