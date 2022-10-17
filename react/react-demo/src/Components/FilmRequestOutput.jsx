import PropTypes from 'prop-types';

function FilmRequestOutput({ title, year, type, poster }) {

    return (
        <>

            <h2>{title}</h2>
            <img style={{ float: "left" }} src={poster} alt="Poster" />
            <section>
                <p>Title: {title}</p>
                <p>Year: {year}</p>
                <p>Type: {type}</p>
            </section>
        </>
    )
}

export default FilmRequestOutput

FilmRequestOutput.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

