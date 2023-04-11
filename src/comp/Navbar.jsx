import React from 'react'
import { Container , Nav , Navbar } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import './Comp.css'
import { useAuth } from '../AuthContext'
import { useLocation } from 'react-router-dom'

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
            <Container className='d-block'>
                <Navbar.Brand className='d-flex justify-content-center' href="#home"><img className='nav-logo' src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle className='berger-menu' aria-controls="basic-navbar-nav" />
                <Container className='nav-container'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto nav-links'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="pawpedia">Pawpedia</Nav.Link>
                            <Nav.Link href="products">Products</Nav.Link>
                            <Nav.Link href="aboutus">About</Nav.Link>
                            <Nav.Link href="contact">Contact</Nav.Link>
                            {currentUser && isProfilePage ? (
                              <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                            ) : (
                              <Nav.Link href="/signupform">Sign Up</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    </header>
  )
}
