import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchForecast } from '../../services/weatherservice';
import './ForecastGrid.css';

const ForecastGrid = ({ city }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        if (city) {
            fetchForecast(city)
                .then(forecastData => {
                    setForecast(forecastData);
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
                    // Create a new Date object from the date string
                    const date = new Date(dayForecast.date);

                    // Use getDay() to get the day of the week as a number, and map it to a name
                    const dayName = days[date.getDay()];

                    return (
                        <Col key={index} className="forecast-boxes shadow rounded p-4 m-4">
                            <p>{dayName}</p>
                            <p>Temperature: {dayForecast.temperature}°C</p>
                            <p>Weather: {dayForecast.weather}</p>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ForecastGrid;
