import React from 'react'
import { Container } from 'react-bootstrap'
import Dogowner from '../assets/images/dogowner-thinking.jpg'


export default function FeaturedServices() {
  return (
    <section>
        <Container id='FeaturedServices'>
            <div className="row justify-content-center">
                <div className="col-12">
                    <figure className='d-flex justify-content-center'>
                        <img src={Dogowner} alt="A picture of a dog owner thinking" />
                    </figure>
                </div>
                <div className="col-5">
                    <h1>TITLE</h1>
                    <h3>DESCRIPTION</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia iure vero fugit corporis cum explicabo nemo fuga aliquam, quis assumenda commodi numquam hic, delectus velit perspiciatis, officiis aperiam ipsa provident? Exercitationem impedit, voluptas dolorum quisquam itaque nulla adipisci! Esse dolor nobis est ea ut minus in omnis aperiam ab?</p>
                </div>
            </div>
        </Container>
    </section>
  )
}
