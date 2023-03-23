import React, { useState } from 'react';
import './homescreen.css';
import bg from './bg.png';
// import bg1 from './bg1.png';
import logo from './rys.png';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';


const Homescreen = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        // <div className='homescreen'>
        // HomeScreen Background Image
        <div className='bg-image'
            style={{
                backgroundImage: 'url(' + bg + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "110vh",
            }}
        >

            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="app logo" />
                </div>

                <div className="navbar-login">
                    <a href="#" className="items"> Log In / Register</a>
                    <div />
                    <a href="#" className="items"> Demo Test </a>
                </div>

                {/* GiHamburger Menu */}
                <div className="navbar-screen">
                    <GiHamburgerMenu color="#9E1AA8" fontSize={27} onClick={() => setToggleMenu(true)} />

                    {toggleMenu && (
                        <div className="navbar-screen-overlay">
                            <FaTimes fontSize={20} className="overlay-close" onClick={() => setToggleMenu(false)} />
                            <ul className="navbar-screen-links">
                                <li className="items"><a href="#"> Log In / Register </a></li>
                                <li className="items"><a href="#"> Demo Test </a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            {/* HomeScreen Content */}
            <div className='homescreen_content'>
                <h1 className='homescreen_header'> Mission to Deep Skill </h1>
                <p className='homescreen_para'> RateYourSkills is a skill assessment platform used to upgrade, improve, and boost confidence by achieving a higher score in a desired test. It is an objective platform that verifies and assesses a candidate's competencies.
                    <div className="rate">
                        <a className="items"> 250K+ User Enrolled </a>
                        <div />
                        <a className="items"> 1M+ Test Taken </a>
                    </div>
                </p>
            </div>
        </div>
        // </div>
    );
};
export default Homescreen;