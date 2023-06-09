import React from 'react'
import { Container , Nav , Navbar } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import './Comp.css'
import { useAuth } from '../AuthContext'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function TheNavbar() {
  const { currentUser, signOut } = useAuth() || {};
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  function handleSignOut() {
    signOut();
  }

  return (
    <header>
        <Navbar className='navi-bar' expand="lg">
            <Container className='d-block navbar-container'>
                <Navbar.Brand className='d-flex justify-content-center' href="#home"><img className='nav-logo' src={logo} alt="" /></Navbar.Brand>
                {currentUser && isProfilePage ? (
                  <Link className='auth error' onClick={handleSignOut}>Sign Out</Link>
                ) : (
                  <Link className='auth error' to="/signupform"><u>SIGN UP / LOGIN</u><i class="bi bi-file-person"></i></Link>
                )}
                <Navbar.Toggle className='berger-menu' aria-controls="basic-navbar-nav" />
                <Container className='nav-container'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto nav-links'>
                            <Link to="/" className="font-text-nav">HOME</Link>
                            <Link className="font-text-nav" to="pawpedia">PAWPEDIA</Link>
                            <Link className="font-text-nav" to="products">PRODUCTS</Link>
                            <Link className="font-text-nav" to="aboutus">ABOUT</Link>
                            <Link className="font-text-nav" to="contact">CONTACT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    </header>
  )
}
