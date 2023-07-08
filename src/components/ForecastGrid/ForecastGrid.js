import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchForecast } from '../../services/weatherservice';
import DisplayWeatherIcon from '../DisplayWeatherIcon/DisplayWeatherIcon';
import './ForecastGrid.css';

const ForecastGrid = ({ city }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        if (city) {
            fetchForecast(city)
                .then(forecastData => {
                    const today = new Date();
                    today.setHours(0,0,0,0); // Set the time to 00:00:00
                    const dateMap = new Map();
    
                    forecastData
                        .map(item => ({ ...item, date: new Date(item.date) }))
                        .forEach(item => {
                            item.date.setHours(0,0,0,0); // Set the time to 00:00:00
                            const key = item.date.toDateString();
                            if (!dateMap.has(key) && item.date.getTime() >= today.getTime()) {
                                dateMap.set(key, item);
                            }
                        });
    
                    const nextFiveDaysForecast = Array.from(dateMap.values()).slice(0, 5);
                    setForecast(nextFiveDaysForecast);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [city]);

    return (
        <Container>
            <Row>
                {forecast.map((dayForecast, index) => {
                    const date = new Date(dayForecast.date);
                    const dayName = days[date.getDay()];

                    return (
                        <Col key={index} className="forecast-boxes shadow rounded p-4 m-4">
                            <p>{dayName}</p>
                            <p>Temperature: {dayForecast.temperature}°C</p> 
                            <DisplayWeatherIcon weather={dayForecast.icon} />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ForecastGrid;
