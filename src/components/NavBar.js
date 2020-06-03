import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ScrollIntoView from 'react-scroll-into-view';


function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="*" fixed="top">
            <Navbar.Brand href="/"><p style={{color: 'white'}}>Moonlight</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <ScrollIntoView selector="#section1" alignToTop={true}>
                        <Nav.Link><p style={{ color: 'white'}}>Home</p></Nav.Link>
                    </ScrollIntoView>
                    <ScrollIntoView selector="#section2" alignToTop={true}>
                        <Nav.Link><p style={{ color: 'white'}}>About</p></Nav.Link>
                    </ScrollIntoView>
                    
                    <Nav.Link href="/User"><p style={{ color: 'white'}}>User</p></Nav.Link>
                    
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link href="/SignIn">Sign in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;