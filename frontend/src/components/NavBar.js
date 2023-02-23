import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  return (
    <Navbar style={{ backgroundColor: "#ABF62D" }}>
      <Container>
        <Navbar.Brand href="/#/home">Disease OutBreak Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/home">Home</Nav.Link>
            <Nav.Link href="/#/notebook">Notebook</Nav.Link>
            <Nav.Link href="/#/predictions">Predictions</Nav.Link>
            <Nav.Link href="#link">Analytics</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
