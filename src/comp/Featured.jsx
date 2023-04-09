import React from 'react'
import { Container } from 'react-bootstrap'
import Eatingdog from '../assets/images/dog-eating.jpg'
import './Comp.css'

export default function Featured() {
  return (
    <section>
        <Container>
            <div className="row featured-row align-items-center justify-content-center">
                <div className="col-6 col-md-5 col-lg-4">
                    <figure>
                        <img src={Eatingdog} alt=""/>
                    </figure>
                </div>
                <div className="col-12 col-md-5 col-lg-5">
                    <h1 className='text-start'>LOOKING FOR THE BEST HEALTHY FOOD FOR YOUR DOG?</h1>
                    <h3>DESC</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis facere a minus sapiente iure facilis incidunt, maxime autem doloribus quae distinctio amet eveniet vitae adipisci unde ipsa inventore hic! Enim quod voluptate necessitatibus ipsam vero perspiciatis, dolor eos nisi? Quibusdam necessitatibus quam beatae, dolores assumenda non saepe tempore est quasi!</p>
                </div>
            </div>
        </Container>
    </section>
  )
}
