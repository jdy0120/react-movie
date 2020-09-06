import React from 'react';
import axios from 'axios'; // axios.get()을 이용하여 API호출
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
  state = { // 로딩된 영화데이터를 저장할 곳
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const { 
      data: {
        data: { movies },
      }, // data.data의 내용을 movies에 저장한다.
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=date"); // 영화 API호출
    this.setState({ movies, isLoading: false }); // api에서 받아온 movies데이터를 state에 저장하고 로딩을 끝낸다.

  };  // getMovies() 함수는 조금의 딜레이가 필요하기 때문에 async와 await을 넣어준다.
      // await과 async가 있어야 axios.get()이 반환한 데이터를 제대로 잡을 수 있다.
  componentDidMount() { // App컴포넌트가 그려지면 호출되는 생명주기 함수
    // 영화데이터 로딩!
    this.getMovies();
  };
  render() {
    const {isLoading, movies} = this.state;
    return (
    <section className="container"> {/*HTML의 class와 자바스크립트의 class라는 이름이 겹치면 리액트가 혼란스럽기때문에 className을 사용한다.!!*/}
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie // Movie컴포넌트에 props 전달하기!
                key = {movie.id} // key props경고 메시지를 없애기 위해 유일한 값을 가지는 id를 key값으로 정의했다.
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
            ))}
          </div>
        )}
    </section>
    );
  }
}

export default Home;