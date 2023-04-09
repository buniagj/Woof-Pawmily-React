import React from 'react';
import '../App.css';
import {useState, useEffect} from 'react'

import http from '../lib/axios.js'
import axios from 'axios'

import { Col , Row , Container , InputGroup , Form, NavLink , Modal , Button } from 'react-bootstrap';
import { Link , useParams } from 'react-router-dom'

import UnknownDoggo from '../assets/images/unknown-dog.jpg'


export default function Services()

{

  const [dogs, setDogs] = useState([])
  const [searchText, setSearchText] = useState("")

  const [loading, setLoading] = useState(false)

  const [saveDogData, setSaveDogData] = useState([])
  const [modalShow, setModalShow] = useState(false);

  const [dogView, setDogView] = useState()


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
      getDogData(getSearchAPI)
    }

    const searchSubmit = (e) => {
      setLoading(true)
      console.log(searchText)
      e.preventDefault()
      if (!searchText) {
        console.log("Entered nothing")
        getDogData(null)
      } else {
        console.log("Submit call")
        searchForDog()
      }
    }

    function updateDoggoImg(x,y) {
      if (typeof(x) === "undefined" && typeof(y) === "undefined") {
        return <img className='dog-img' src={UnknownDoggo} alt="No picture of certain dog" />
      }
    }


    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <h1>{dogView}</h1>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }


  return (
    <>
      <h1 className='services'>PAWPEDIA</h1>
      <section>
      <Container>
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
        {/* {typeof(dogs) === "undefined" ? <h1>Loading...</h1> :  */}
        {dogs.length === 0 && loading === false ? <h1>Pawpedia is loading...</h1> : 
          <div className="row justify-content-center px-5" id='dog-search-row'>
            {dogs.map((dog) => (
              <div key={dog.id} className="col-xl-2 col-lg-4 col-md-5 col-12 collumn-fordogs">
                {dog.reference_image_id !== null && saveDogData.map((dogg) => {if (dog.name === dogg.name) {return <img key={dog.id} className='dog-img' src={dogg.image.url} alt={dog.name} />}})}
                {dog.reference_image_id === null && <img className='dog-img' src={dog.image.url} alt={dog.name} />}
                {updateDoggoImg(dog.reference_image_id, dog.image)}
                <h3>{dog.name}</h3>
                {!dog.origin ? <p>Origin: Unknown</p> : <p>Origin: {dog.origin}</p>}
                {!dog.bred_for ? <p>This dog is bred for: Unknown</p> : <p>This dog is bred for: {dog.bred_for}</p>}
                {/* <Button variant="primary" onClick={() => {
                                    setDogView(dog.name)
                                    setModalShow(true)
                                    console.log(`I clicked ${dog.name}`)
                }}>
                  Launch vertically centered modal
                </Button> */}
                <Link onClick={() => {
                                    setDogView(dog.name)
                                    setModalShow(true)
                                    console.log(`I clicked ${dog.name}`)
                }}>
                  View more
                </Link>
              </div>
            ))}
          </div>
        }
        {dogs.length === 0 && loading === true && <div><h1>DOGGO 404</h1><h1>No such DOGGO exists</h1></div>}
        </Container>


        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />

      </section>
    </>
  )
}