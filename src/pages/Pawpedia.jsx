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
  const [onSearch, setOnSearch] = useState(false)

  const [loading, setLoading] = useState(false)

  const [saveDogData, setSaveDogData] = useState([])

  const [dogView, setDogView] = useState()


  const [modalShow, setModalShow] = useState(false)
  const [fullscreen, setFullscreen] = useState(true)
  const [modalDogData, setModalDogData] = useState({
    name: '',
    origin: '',
    bred_for: '',
    breed_group: '',
    height_imperial: '',
    height_metric: '',
    life_span: '',
    temperament: '',
    weight_imperial: '',
    weight_metric: '',
    img: ''
  })


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
        setOnSearch(false)
      } else {
        console.log("Submit call")
        setOnSearch(true)
        searchForDog()
      }
    }

    function updateDoggoImg(x,y,z) {
      if (typeof(x) === "undefined" && typeof(y) === "undefined") {
        return <img id={`${z}img`} className='dog-img' src={UnknownDoggo} alt="No picture of certain dog" />
      }
    }

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          fullscreen={fullscreen}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className='d-flex align-items-center'>
            <Container>
              <div className="row align-items-center">
                <div className="col-12 col-xl-6">
                  <figure>
                    {document.getElementById(`${modalDogData.name}img`) && <img className='img-modal' src={document.getElementById(`${modalDogData.name}img`).src} alt="" />}
                  </figure>
                </div>
                <div className="col-12 col-xl-6">
                  <p>Name: {modalDogData.name}</p>
                  {typeof(modalDogData.origin) == 'undefined' ? <p>Origin: Unknown</p> : <p>Origin: {modalDogData.origin}</p>}
                  {typeof(modalDogData.bred_for) == 'undefined' ? <p>Bred for: Unknown</p> : <p>Bred for: {modalDogData.bred_for}</p>}
                  {typeof(modalDogData.breed_group) == 'undefined' ? <p>Breed group: Unknown</p> : <p>Breed group: {modalDogData.breed_group}</p>}
                  {typeof(modalDogData.life_span) == 'undefined' ? <p>Life span: Unknown</p> : <p>Life span: {modalDogData.life_span}</p>}
                  {typeof(modalDogData.temperament) == 'undefined' ? <p>Temperament: Unknown</p> : <p>Temperament: {modalDogData.temperament}</p>}
                  <p>Height:</p>
                  <ul>
                    {typeof(modalDogData.height_imperial) == 'undefined' ? <li>Imperial: Unknown</li> : <li>Imperial: {modalDogData.height_imperial}</li>}
                    {typeof(modalDogData.height_metric) == 'undefined' ? <li>Metric: Unknown</li> : <li>Metric: {modalDogData.height_metric}</li>}
                  </ul>
                  <p>Weight:</p>
                  <ul>
                    {typeof(modalDogData.weight_imperial) == 'undefined' ? <li>Imperial: Unknown</li> : <li>Imperial: {modalDogData.weight_imperial}</li>}
                    {typeof(modalDogData.weight_metric) == 'undefined' ? <li>Metric: Unknown</li> : <li>Metric: {modalDogData.weight_metric}</li>}
                  </ul>
                  <Button onClick={props.onHide}>Go back</Button>
                </div>
              </div>
            </Container>
          </Modal.Body>
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
                {dog.reference_image_id !== null && saveDogData.map((dogg) => {if (dog.name === dogg.name) {return <img id={`${dog.name}img`} key={dog.id} className='dog-img' src={dogg.image.url} alt={dog.name} />}})}
                {dog.reference_image_id === null && <img id={`${dog.name}img`} className='dog-img' src={dog.image.url} alt={dog.name} />}
                {updateDoggoImg(dog.reference_image_id, dog.image, dog.name)}
                <h3>{dog.name}</h3>
                {!dog.origin ? <p>Origin: Unknown</p> : <p>Origin: {dog.origin}</p>}
                {!dog.bred_for ? <p>This dog is bred for: Unknown</p> : <p>This dog is bred for: {dog.bred_for}</p>}
                <Link onClick={() => {
                                    setDogView(dog.name)
                                    setModalDogData({
                                      name: dog.name,
                                      origin: dog.origin,
                                      bred_for: dog.bred_for,
                                      breed_group: dog.breed_group,
                                      height_imperial: dog.height.imperial,
                                      height_metric: dog.height.metric,
                                      life_span: dog.life_span,
                                      temperament: dog.temperament,
                                      weight_imperial: dog.weight.imperial,
                                      weight_metric: dog.weight.metric,
                                    })
                                    console.log("My origin is: " + modalDogData.origin)
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