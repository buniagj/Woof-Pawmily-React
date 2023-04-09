import React from 'react'
import { Container , Nav , Navbar } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import './Comp.css'

export default function TheNavbar() {
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
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    </header>
  )
}
