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
                <div className="col-6">
                    <h1>Not sure what breed your dog is?</h1>
                    <h3>Check out our Pawpedia!</h3>
                    <p> It's not uncommon to adopt a dog or take in a stray and have no idea what breed they are. Knowing your dog's breed can help you better understand their personality, behavior, and health needs. Fortunately, there are several ways to determine your dog's breed, from a simple visual examination to DNA testing. A visual examination can provide some clues about your dog's breed based on physical characteristics, but it's not always accurate. DNA testing, on the other hand, can provide a more precise answer by analyzing your dog's DNA. Whether you're just curious or need to know for health or training purposes, discovering your dog's breed can be a fun and rewarding experience. </p>
                </div>
            </div>
        </Container>
    </section>
  )
}
