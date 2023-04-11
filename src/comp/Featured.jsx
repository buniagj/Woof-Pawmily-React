import React from 'react'
import { Container } from 'react-bootstrap'
import Eatingdog from '../assets/images/dog-eating.jpg'
import './Comp.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Featured() {

    const navigate = useNavigate()

  return (
    <section id='featured'>
        <Container>
            <div className="row featured-row align-items-center justify-content-center">
                <div className="col-8 col-md-5 col-lg-4">
                    <figure>
                        <img src={Eatingdog} alt=""/>
                    </figure>
                </div>
                <div className="col-11 col-md-5 col-lg-5">
                    <h1 className='text-center text-md-start font-text'>LOOKING FOR THE <span>BEST HEALTHY FOOD</span> FOR YOUR DOG?</h1>
                    <h3 className='font-text text-md-start mt-4z my-md-4 text-center'>Check out our Products!</h3>
                    <p className='text-center text-md-start lh-3'>Look no further! Your furry friend deserves the best, and that means feeding them high-quality, nutritious food. With so many options on the market, it can be overwhelming to choose the right one. But don't worry, we've got you covered. Our carefully crafted dog food is made with only the finest ingredients and is packed with essential nutrients to keep your pup happy and healthy. Say goodbye to cheap, filler-filled dog food that does more harm than good. Treat your dog to the best with our top-quality, healthy dog food. Your dog will thank you for it!</p>
                    <Button onClick={() => {navigate("/products")}} className='shop-btn'>SHOP NOW!</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}
