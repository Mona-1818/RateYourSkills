import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './coursel.css';
import { data } from './data';
import { FaAward } from 'react-icons/fa';

export default function Carousel() {
	const settings = {
      	dots: false,
      	infinite: true,
      	slidesToShow: 6,
      	slidesToScroll: 2,
      	autoplay: true,
      	speed: 2000,
      	autoplaySpeed: 2000,
      	cssEase: "linear",
          responsive: [
               {
                    breakpoint: 1000,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 1,
                         initialSlide: 1,
                         autoplay: true
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 1,
                         initialSlide: 1,
                         autoplay: true
                    }
               },
               {
                    breakpoint: 400,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
                         initialSlide: 1,
                         autoplay: true
                    }
               }
          ]
    };
     return (
          <div className="carousel">
               <div className='carousel_heading'>
                <h1> Score board </h1>
                <p> On average, recuriters who use RateYourSkills decide a job candidate's suitability in half the time.
                    They save one hour per job candidate and often get compliments from clients about them.
                </p>
            </div> 

               <Slider {...settings}>
                    {data.map(item=>(
                         <div className="card">
                              <div className="cardith">
                                   <div className= "image">
                                        <img src={item.img} alt="react logo" />
                                   </div>
                                   <div className="info">
                                        <h4>Skill : {item.subject}</h4>
                                        <h3> <FaAward /> <a href={item.firstrank} > {item.first} </a> </h3>
                                        <h3> <FaAward /> <a href={item.secondrank} > {item.second} </a> </h3>
                                        <h3> <FaAward /> <a href={item.thridrank} > {item.thrid} </a> </h3>
                                   </div>
                              </div>
                         </div>
                    ))}
               </Slider>
          </div>
     );
}

