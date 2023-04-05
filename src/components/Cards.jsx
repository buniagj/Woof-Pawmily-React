import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these PAWSOME articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='What breed is my dog? (4 ways to find out)'
              label='Breed'
              path='https://www.wisdompanel.com/en-us/blog/breed-identifier'
              target='_blank'
            />
            <CardItem
              src='/images/img-5.jpg'
              text='Coolest Pet Restaurants in the World'
              label='Luxury'
              path='https://travel.earth/pet-friendly-restaurants-food-places-world/'
              target='_blank'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='59 Simple Life Hacks for Dog Owners'
              label='Life Hacks'
              path='https://www.puppyleaks.com/simple-tips/'
              target='_blank'
            />
            <CardItem
              src='/images/img-6.jpg'
              text='Social Dogs are Awesome!'
              label='Adventure'
              path='https://www.dogadventures.co.uk/'
              target='_blank'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='50 Secrets Your Pet Will Not Tell You '
              label='Dog Secrets '
              path='https://www.rd.com/list/pet-secrets/'
              target='_blank'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
