import React from 'react'
import { Form , InputGroup , Container } from 'react-bootstrap'

export default function Contact() {
  return (
    <section>
        <Container id='contact' className='align-items-center justify-content-center'>
            <div className='mx-5'>
                <h1 className='text-center pt-5 error'>Get in <span>touch</span></h1>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                        <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <Form.Label>Contact reason</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open to select reason</option>
                        <option value="1">Contacting me for interview</option>
                        <option value="2">Collab inquiry</option>
                        <option value="3">Product discussions</option>
                        <option value="4">Others</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Details</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>
                <div className='d-flex justify-content-center'>
                    <button className='send-msg'>SEND MESSAGE</button>
                </div>
            </div>
        </Container>

    </section>
  )
}
