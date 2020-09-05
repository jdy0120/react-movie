import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    compoenteDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="d_movie">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="d_title"><h2>{location.state.title}</h2></div>
                    <div className="d_year"><h2>{location.state.year}</h2></div>
                    <div className="d_genres"><h3>{location.state.genres}</h3></div>
                    <div className="d_summary"><p>{location.state.summary}</p></div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;