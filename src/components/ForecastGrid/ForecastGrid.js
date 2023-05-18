import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ForecastGrid.css';

const SevenColumnGrid = () => (
    <Container>
        <Row>
            <Col className="column-box">Placeholder text 1</Col>
            <Col className="column-box">Placeholder text 2</Col>
            <Col className="column-box">Placeholder text 3</Col>
            <Col className="column-box">Placeholder text 4</Col>
            <Col className="column-box">Placeholder text 5</Col>
            <Col className="column-box">Placeholder text 6</Col>
            <Col className="column-box">Placeholder text 7</Col>
        </Row>
    </Container>
);

export default SevenColumnGrid;
