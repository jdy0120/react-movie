import React from 'react'; // 리액트가 JSX를 이해할 수 있도록 선언해준다.
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
// 컴포넌트를 작성할 때 중요한 규칙은 이름이 대문자로 시작해야한다는 것!!
function App() {
    return (
        <HashRouter>
            <Navigation /> {/*네비게이션 컴포넌트를 출력하여 라우터를 사용한다*/}
            <Route path="/" exact={true} component={Home}/> {/* exact={true}는 라우트 컴포넌트가 path props와 정확하게 일치하는 URL에만 반응하도록 만들어준다.*/}
            <Route path="/about" component={About}/>
            <Route path="/movie-detail" component={Detail}/> {/* movie-detail링크에 Detail컴포넌트를 입혀준다. */}
        </HashRouter>
    );
}

export default App; // 다른 파일에서 App.js를 사용할 수 있도록 선언해준다.

// App.js와 index.js 등의 파일을 리액트가 받아와서 해석하고 만든 결과물을 index.html에 끼워 넣는다.