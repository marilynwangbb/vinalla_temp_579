import React from 'react';
import './Divider.css';
import divider from '../assets/webpage_divider.png';

const Divider = () => {
    return (
        <div className="divider">
            <img src={divider} alt="web divider" />
        </div>
    );
};

export default Divider;