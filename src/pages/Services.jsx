import React from 'react';
import '../App.css';
import {useState, useEffect} from 'react'

import http from '../lib/axios.js'
import axios from 'axios'

import { Col , Row , Container , InputGroup , Form, NavLink } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'


export default function Services()

{

  const [dogs, setDogs] = useState([])
  const [searchText, setSearchText] = useState([])

  const [saveDogData, setSaveDogData] = useState([])
  const [onSearch, setOnSearch] = useState(false)


  const getDogData = (input) => {
    if (input === null) {
      axios.request(http).then(function (response) {
        setDogs(response.data)
        setSaveDogData(response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.error(error)
      });
    } else if (input !== null) {
      axios.request(input).then(function (response) {
        setDogs(response.data)
        console.log(response.data)
      }).catch(function (error) {
        console.error(error)
      });
    }

  }

    useEffect(() => {
      getDogData(null)
    }, [])

    const getSearchAPI = {
      method: 'GET',
      url: `https://api.thedogapi.com/v1/breeds/search?q=${searchText}`,
      headers: {
          'x-api-key': 'live_zxEJ3VfRIVZFHN0TXO47FArKT0TfWl2PeKDHwcb4SG68UBSytyCx9XZZGAJQBvUz',
          'Content-Type': 'application/json'
      }
    }

    const searchForDog = () => {
      setOnSearch(true)
      getDogData(getSearchAPI)
    }

    const searchSubmit = (e) => {
      console.log("Submitted")
      e.preventDefault()

      searchForDog()
    }

    function updateDoggoImg(x,y) {
      if (typeof(x) === "undefined" && typeof(y) === "undefined") {
        return <p>This DOGGO has no IMAGE, e uupdate pato ni Andrew</p>
      }
    }


  return (
    <>
      <h1 className='services'>PAWPEDIA</h1>
      <section>
        <Form className="mb-3" onSubmit={searchSubmit}>
          <Form.Control
            type="text"
            name="breed-search"
            id="breed-search"
            placeholder="Search for a certain dog/breed"
            aria-label="Breed Searching"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form>
        {!dogs ? <h1>Loading...</h1> : 
          <div className="row justify-content-center px-5" id='dog-search-row'>

            {dogs.map((dog) => (
              <div key={dog.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-12 collumn-fordogs">
                {dog.reference_image_id !== null && saveDogData.map((dogg) => {if (dog.name === dogg.name) {return <img key={dog.id} className='dog-img' src={dogg.image.url} alt={dog.name} />}})}
                {dog.reference_image_id === null && <img className='dog-img' src={dog.image.url} alt={dog.name} />}
                {updateDoggoImg(dog.reference_image_id, dog.image)}

                <h3>{dog.name}</h3>
                {!dog.origin ? <p>Origin: Unknown</p> : <p>Origin: {dog.origin}</p>}
                {!dog.bred_for ? <p>This dog is bred for: Unknown</p> : <p>This dog is bred for: {dog.bred_for}</p>}
              </div>
            ))}
          </div>
        }

      </section>
    </>
  )
}