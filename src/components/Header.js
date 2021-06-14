import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Digimons App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">My Digimons</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header;
