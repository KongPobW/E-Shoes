import React, { useState } from 'react';
import './Slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slide from './Slide';
import { sliderItems } from '../data';

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const wrapperStyle = {
        transform: `translateX(${slideIndex * -100}vw)`
    };

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <div className="slider-container">
            <div className="arrow-container arr-left" onClick={() => handleClick("left")}>
                <FontAwesomeIcon icon={faCircleArrowLeft} />
            </div>

            <div className="wrapper-slider" style={wrapperStyle}>
                {sliderItems.map((item) =>
                    <Slide key={item.id} src={item.img} title={item.title} desc={item.desc} bg={item.bg} />
                )}
            </div>

            <div className="arrow-container arr-right" onClick={() => handleClick("right")}>
                <FontAwesomeIcon icon={faCircleArrowRight} />
            </div>
        </div>
    );
}

export default Slider;
