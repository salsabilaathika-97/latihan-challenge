import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed = 'top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id = 'responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href ="/">Home</Nav.Link>
                            <Nav.Link href = "/OurService">Our Services</Nav.Link>
                            <Nav.Link href = "/WhyUs">Why Us</Nav.Link>
                            <Nav.Link href = "/Testimonial">Testimonial</Nav.Link>
                            <Nav.Link href = "/FAQ">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default Navigation;
