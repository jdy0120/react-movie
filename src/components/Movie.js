import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, year, summary, poster, genres}) {
    return(
        <div className="movie">
            <Link to={{ pathname: '/movie-detail', state: { year,title,summary,poster,genres },}}> {/* movie-detail링크로 받아온 데이터를 보내준다. */}
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className='movie__genres'>
                        {genres.map((genre, index) => {
                            return (
                                <li key = {index} className="movie__genres">{ genre }</li>
                            ) 
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = { // API에서 넘어온 변수들 추가해준다.
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;