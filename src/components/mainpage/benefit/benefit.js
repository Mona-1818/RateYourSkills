import './benefit.css';
import React from 'react';
import clock from './clock.png';
import fast from './fast.png';
import secure from './secure.png';
import cert from './cert.png';
import ques from './add-ques.png';

export default function Benefit() {
    return (
        <div className='benefit'>
            <div className='benefit_heading'>
                <h1> Benefits at a Glance </h1>
                <p> On average, recuriters who use RateYourSkills decide a job candidate's suitability in half the time.
                    They save one hour per job candidate and often get compliments from clients about them.
                </p>
            </div>

            <div className='benefit_points'>
                <div className='benefit_table'>
                    <div className='benefit_point'>
                        <div>
                            <div className='benefit_img'>
                                <img src={clock} alt="clock" />
                            </div>
                            <div className='benefit_content'>
                                <h3> Available anywhere anytime </h3>
                                Tests are available 24/7 and candidates can take the assessments from anywhere in the world, with any browser.
                            </div>
                        </div>
                    </div>

                    <div className='benefit_point'>
                        <div>
                            <div className='benefit_img'>
                                <img src={fast} alt="fast" />
                            </div>
                            <div className='benefit_content'>
                                <h3> Fast Result Reporting </h3>
                                You get tests results instantly by email and they are also archived in the system for later reference.
                            </div>
                        </div>
                    </div>

                    <div className='benefit_point'>
                        <div>
                            <div className='benefit_img'>
                                <img src={secure} alt="secure" />
                            </div>
                            <div className='benefit_content'>
                                <h3> Secure </h3>
                                We take privacy & security seriously. All information is transmitted over a secure and encrypted connection.
                            </div>
                        </div>
                    </div>
                    <div className='benefit_point'>
                        <div>
                            <div className='benefit_img'>
                                <img src={cert} alt="certificate" />
                            </div>
                            <div className='benefit_content'>
                                <h3> Certificate of Achievement </h3>
                                Tests are available 24/7 and candidates can take the assessments from anywhere in the world, with any browser.
                            </div>
                        </div>
                    </div>
                    <div className='benefit_point'>
                        <div>
                            <div className='benefit_img'>
                                <img src={ques} alt="add your own question" />
                            </div>
                            <div className='benefit_content'>
                                <h3> Submit your test question </h3>
                                RateYourSkills allows you to build your tests in any format: timed, scored and with a wide variety of question types.
                            </div>
                        </div>
                    </div>
                    <div className='benefit_point'>
                        <div>
                            <div className='benefit_img'>
                                <img src={clock} alt="clock" />
                            </div>
                            <div className='benefit_content'>
                                <h3> Available anywhere anytime </h3>
                                Tests are available 24/7 and candidates can take the assessments from anywhere in the world, with any browser.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}