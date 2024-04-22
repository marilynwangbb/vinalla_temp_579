import React from 'react'
import {useState , useEffect} from "react";
import './AffirmationItem.css';
import { Offcanvas } from 'react-bootstrap';

const AffirmationItem = () => {
    const [quote, setQuote] = useState('Positivity Recharing ...');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getQuote = () => {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomQuote = data[Math.floor(Math.random() * data.length)];
            setQuote(randomQuote.text); 
        })
        .catch(error => console.error('Error fetching quotes:', error)); 
    };


    useEffect(() => {
        handleShow()
        getQuote();
        const timeBanner = setTimeout(() => {
            handleClose();
        }, 2000);

        return () => clearTimeout(timeBanner);
    }, []); 

    return (
        //<div className="quote-banner" >
            //<div className = "quote-text">
                //{quote}
            //</div>
        //</div>
        <Offcanvas show={show} onHide={handleClose} placement ='top'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Positivity of the Day</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {quote}
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default AffirmationItem;
