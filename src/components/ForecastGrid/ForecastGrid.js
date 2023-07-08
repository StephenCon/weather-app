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
                    // Process dates and filter out today's forecast, keep next 5 days only
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);  // Normalize to mid-night today

                    const nextFiveDaysForecast = forecastData
                        .map(item => ({ ...item, date: new Date(item.date) }))  // Ensure dates are Date objects
                        .filter(item => item.date.getTime() > today.getTime())  // Filter out today's data
                        .slice(0, 5);  // Keep next 5 days only

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
