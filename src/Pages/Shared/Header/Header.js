import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="danger" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                 <img src={logo} height={30}  alt="" /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#items">Items</Nav.Link>
                        <Nav.Link  href="home#services">Services</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/product">Product</Nav.Link>
                        {
                            user ?
                              <>

                                <Nav.Link as={Link} to="/manageitem">Manage item</Nav.Link>
                                <Nav.Link as={Link} to="/additem">Add item</Nav.Link>
                                <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                               <button onClick={handleSignOut}>SignOut</button>
                              </>
                            :
                            
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;