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
                <div className="d_movie"> {/* movie라는 클래스 이름을 사용하면 다른 js파일의 css를 상속받는다는 것을 확인하여 'd_'를 붙여줬다.*/}
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="d_title"><h2>{location.state.title}</h2></div>
                    <div className="d_year"><h2>{location.state.year}</h2></div>
                    <div className="d_genres"><h3>{location.state.genres}</h3></div>
                    <div className="d_summary"><p>{location.state.summary}</p></div>
                </div>
            )
        } else { /* location.state가 없으면 render()함수가 null을 반화하도록 수정한다.
                    이는 home에서 영화를 클릭해서 movie-detail링크로 들어오지 않고 한번에 movie-detail로 들어왔을 경우
                    'properyy undefined'오류를 생성하기 때문에 null값을 반환하도록 만들어준다. */
            return null;
        }
    }
}
export default Detail;