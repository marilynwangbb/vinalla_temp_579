import React from 'react';
import './Banner.css';
import bannerImage from '../assets/bannerbg.png';

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" />
        </div>
    );
};

export default Banner;