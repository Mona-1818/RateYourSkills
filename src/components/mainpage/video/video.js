import React from 'react';
import './video.css';

const Video = () => {
    return (
        <div className='video'>
            <div className='video_content'>
                <h1> Demo of the Test </h1>
                <p> RateYourSkills is a skill assessment platform used to upgrade, improve, and boost confidence by achieving a higher score in a desired test. It is an objective platform that verifies and assesses a candidate's competencies.
                </p>
            </div>
            <div className='video_vid'>
                <iframe width='560' height='315' src='https://www.youtube.com/embed/B4yV3AO7G6E' frameborder='0' allow='autoplay:encrypted-media'>
                </iframe>
            </div>

        </div>
    )
}

export default Video;