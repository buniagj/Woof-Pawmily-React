import React from 'react'
import { Container , Button } from 'react-bootstrap'
import Dogowner from '../assets/images/dogowner-thinking.jpg'
import { Link } from 'react-router-dom';


export default function FeaturedServices() {
  return (
    <section id='FeaturedServices'>
        <Container>
            <div className="row justify-content-center">
                <div className="col-11 col-md-6">
                    <figure className='d-flex justify-content-center'>
                        <img className='dogowner' src={Dogowner} alt="A picture of a dog owner thinking" />
                    </figure>
                </div>
                <div className="col-11 col-md-7">
                    <h1 className='font-text'>Not sure <span className='featuredservices-h1'>what breed</span> your <span className='featuredservices-h1'>dog</span> is?</h1>
                    <h3 className='font-text text-center mt-4'>Check out our <span className='featuredservices-h1'>Pawpedia</span>!</h3>
                    <p className='text-center lh-2'> It's not uncommon to adopt a dog or take in a stray and have no idea what breed they are. Knowing your dog's breed can help you better understand their personality, behavior, and health needs. Fortunately, there are several ways to determine your dog's breed, from a simple visual examination to DNA testing. A visual examination can provide some clues about your dog's breed based on physical characteristics, but it's not always accurate. DNA testing, on the other hand, can provide a more precise answer by analyzing your dog's DNA. Whether you're just curious or need to know for health or training purposes, discovering your dog's breed can be a fun and rewarding experience. </p>
                    <Button className='pawpedia-btn'>VISIT PAWPEDIA</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}
