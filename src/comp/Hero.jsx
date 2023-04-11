import React from 'react'
import { Container } from 'react-bootstrap'
import './Comp.css'

export default function Hero() {
  return (
    <section>
        <div className='container hero-container d-flex align-items-center'>
            <video autoPlay loop muted>
                <source src='/videos/video-1.mp4' type='video/mp4' />
            </video>
            <Container className='hero-texts'>
                <div>
                    <h1 className='font-text'>Pawsitively the best.</h1>
                </div>
                <div>
                    <p>What are you waiting for?</p>
                </div>
            </Container>
        </div>
    </section>
  )
}