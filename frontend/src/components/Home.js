import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

function Home() {
  const [cases, setCases] = useState(0);
  const [new_cases, setNewCases] = useState(0);
  const [news, setNews] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((resData) => {
        setCases({ cases: resData.total_cases });
        setNewCases({ new_cases: resData.new_cases });
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((response) => response.json())
      .then((data) => {
        setNews({
          news: data.foo
            .split("\n")
            .join("<br /> ")
            .split("Disease Outbreak News")
            .join(""),
        });
      });
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Disease OutBreak Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Predictions</Nav.Link>
              <Nav.Link href="#link">Analytics</Nav.Link>
              <Nav.Link href="#link">News</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col sm={8}>
            <h1 className="mb-5 mt-5">DashBoard</h1>
            <Row>
              <Col>
                <Card
                  bg="primary"
                  key="primary"
                  style={{ width: "18rem" }}
                  className="mb-5"
                >
                  <Card.Header>Covid</Card.Header>
                  <Card.Body>
                    <Card.Title>Total Cases: {cases.cases}</Card.Title>
                    <Card.Title>New Cases: {new_cases.new_cases}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  bg="primary"
                  key="primary"
                  style={{ width: "18rem" }}
                  className="mb-5"
                >
                  <Card.Header>Ebola</Card.Header>
                  <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card
                  bg="primary"
                  key="primary"
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>MonkeyPox</Card.Header>
                  <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  bg="primary"
                  key="primary"
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>Ebola</Card.Header>
                  <Card.Body>
                    <Card.Title> Card Title </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col sm={4}>
            <Card
              bg="warning"
              key="primary"
              style={{ width: "22rem" }}
              className="mb-2 mt-5"
            >
              <Card.Header>Alerts</Card.Header>
              <Card.Body>
                <Card.Title> Incidents Around The World </Card.Title>
                <span>{<div>{ReactHtmlParser(news.news)}</div>}</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
