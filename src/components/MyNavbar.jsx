import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap'

class MyNavbar extends React.Component {
    render() {
        return (
            <Navbar variant="dark">
        <Container >
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        )
    }
}

export default MyNavbar