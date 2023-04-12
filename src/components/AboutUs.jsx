import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <Container>
        <div className="row">
          <div className="col-lg-11">
            <h2 className='error'>ABOUT US</h2>
            <p>Welcome to Woof Pawmily, the ultimate online destination for dog lovers around the world! Our passion for canines inspired us to create a community that celebrates the unconditional love, loyalty, and joy that dogs bring to our lives.</p>
            <p>At Woof Pawmily, we understand that dogs are not just pets; they are furry family members who deserve the best care, attention, and love. Our mission is to help you give your dog the best life possible by providing you with valuable information, resources, and products that cater to your dog's unique needs and personality.</p>
            <p>Whether you're a first-time dog owner or an experienced pawrent, our team of passionate dog enthusiasts is dedicated to bringing you the latest trends, tips, and insights into the canine world. From health and nutrition to training and grooming, we cover it all, so you can make informed decisions and provide the best care for your furry friend.</p>
            <p>Our online store features a carefully curated selection of high-quality dog products that are both functional and stylish. We strive to bring you products that meet our strict standards for quality, safety, and environmental sustainability, so you can shop with confidence.</p>
            <p>Join our Woof Pawmily community today and connect with fellow dog lovers from all over the world. Let's celebrate the joy of having a furry best friend together!</p>
            <div>
              <h2 className='error'>Team</h2>
              <div className="row text-center">
                <div className="col">
                  <figure>
                    <img className='dev-pic' src="images/dev1.jpg" alt="" />
                    <h5 className='error'>Paw-end Developer</h5>
                  </figure>
                </div>
                <div className="col">
                  <figure>
                    <img className='dev-pic' src="images/dev2.jpg" alt="" />
                    <h5 className='error'>Paw-end Developer</h5>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutUs;