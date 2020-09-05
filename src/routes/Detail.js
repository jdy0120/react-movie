import React from 'react';

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
                <div className='title'>
                    <h2>{location.state.title}</h2>
                    <h2>{location.state.year}</h2>
                    <h3>{location.state.genres}</h3>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;