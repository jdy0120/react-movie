import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

// 화면을 이동시켜주는 장치인 Router를 사용하여 네비게이션을 만들 수 있다.
function Navigation() {
    return(
        <div className="nav">
            <Link to="/">Home</Link> {/* a엘리먼트를 사용하면 링크를 누를 때마다 리액트가 죽고,
            새 페이지가 열리는 문제(필요한 부분만 다시 그려주는 리액트의 장점을 활용할 수 없다.)
            가 있다. Link로 바꾸어 해결하였다.*/}
            <Link to="/about">About</Link>
            
        </div>
    )
}

export default Navigation;