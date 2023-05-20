// Import necessary modules
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ForecastGrid.css';

// Define ForecastGrid as a functional component
const ForecastGrid = () => {
    // Define an array of days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Create a new Date object to get the current date
    const date = new Date();

    // Use getDay method to get the current day of the week as a number (0-6, where 0 is Sunday)
    const today = date.getDay();

    // Define a function to calculate the next seven days
    const getNextSevenDays = () => {
        // Initialize an empty array to store the names of the next seven days
        let nextDays = [];

        // Loop from 1 to 7 (inclusive)
        for (let i = 1; i <= 7; i++) {
            // Calculate the index of the next day by adding i to today and taking the modulus 7
            // This ensures that the index wraps around to 0 (Sunday) after 6 (Saturday)
            // Then push the name of the next day to the nextDays array
            nextDays.push(days[(today + i) % 7]);
        }

        // Return the array of the next seven days
        return nextDays;
    }

    // Call the function to get the next seven days
    const nextSevenDays = getNextSevenDays();

    // Render the ForecastGrid component
    return (
        // Create a container using the Container component from react-bootstrap
        <Container>
            <Row>
                {/* Map over the nextSevenDays array to create a column for each day
                    Each column will display the name of one of the next seven days
                    Note: the key attribute is necessary when rendering a list in React */}
                {nextSevenDays.map((day, index) => (
                    <Col key={index} className="column-box">{day}</Col>
                ))}
            </Row>
        </Container>
    );
};

// Export the ForecastGrid component to be used in other files
export default ForecastGrid;
