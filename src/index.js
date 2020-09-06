import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); // <App />뒤에 다른 컴포넌트를 추가하면 오류가 생긴다. 한개의 컴포넌트만 추가하고 App.js안에 다른 컴포넌트를 추가한다.
// App.js파일에 작성한 코드를 index.html의 아이디가 'root'인 엘리먼트에 넣어준다.