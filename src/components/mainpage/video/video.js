import React from 'react';
import './video.css';

const Video = () => {
    return (
        <div className='video'>
            <div className='video_content'>
                <h1> Demo of the Test </h1>
                <p> RateYourSkill platform is a visual representation of the it's features, purpose, and benefits. The demo test video aims to showcase the effectiveness of the platform as a valuable tool for self-assessment and skill development. It highlights the different categories available and how users can use it to evaluate their skills in each category. The video demonstrate the process of creating a profile on the platform, selecting categories to assess their skills, and taking the assessments. The feature of providing feedback on the skill levels and areas for improvement. Further more, the video also exhibits the platform's user-friendly interface, including clear instructions and well-structured assessments.
                    Overall, the demo test video of the Rate Your Skill platform is an informative and engaging way  for personal and professional development, such as identifying skill gaps and setting goals for improvement.
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