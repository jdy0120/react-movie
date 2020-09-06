import React from 'react';
import './About.css';

function About(props) {
    return (<div className="about__container">
        <span>
            "리액트를 이용한 웹페이지입니다. yts.ms의 영화 api를 받아와 출력했습니다."
        </span>
        <span> 조도연 </span>
    </div>);
}

export default About;