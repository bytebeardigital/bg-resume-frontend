import React from 'react';
import {Form, Button as BootButton} from 'react-bootstrap';

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: ""
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    if(this.state.email.trim()) {
      this.setState({
        email: "",
      })
    } else {
      alert("Please enter an email")
    }
  }
  render() {
    return(
      <div className="contact-form">
<h2 className="heading">Contact Form</h2>
                    <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Name</Form.Label>
    <Form.Control name="name" value={this.state.name} onChange={this.onChange}placeholder="name" className="formInput" type="text"/>
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" value={this.state.email} onChange={this.onChange} placeholder="email" className="formInput" type="email"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control className="formInput" name="message" onChange={this.onChange} value={this.state.message} placeholder="message" as="textarea" rows={3} />
  </Form.Group>
  <BootButton variant="primary" className="formButton" type="submit">Submit</BootButton>
</Form>
</div>
    )
  }
}


export default ContactForm;