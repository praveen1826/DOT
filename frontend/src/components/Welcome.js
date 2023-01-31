import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import myImage from "../images/ind_cov.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  const Jumbotron = ({ children }) => {
    return (
      <Card
        className="text-center"
        style={{ backgroundColor: "#f7f7f7", marginBottom: "0" }}
      >
        <Card.Body>{children}</Card.Body>
      </Card>
    );
  };
  return (
    <div
      style={{
        backgroundImage: `url(${myImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container>
        <Jumbotron>
          <h1>Disease Outbreak Tracker</h1>
          <Link to="/home">
            <Button variant="primary">Go to Home</Button>
          </Link>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Welcome;
