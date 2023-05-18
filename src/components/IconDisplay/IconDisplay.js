import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner, Alert } from 'react-bootstrap';

function IconDisplay({ city }) {
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = 'f023d6d413541c55d2f6cbcb018522e8';

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            setLoading(false);
            setWeather(response.data.weather[0].icon);
        })
        .catch(error => {
            setLoading(false);
            setError(error.message);
        });
    }, [city]);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        weather && <img 
            src={`http://openweathermap.org/img/wn/${weather}.png`} 
            alt="Weather Icon" 
        />
    );    
}

export default IconDisplay;
