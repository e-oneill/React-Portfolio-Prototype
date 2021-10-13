import React from "react";
import Jumbotron from "./Jumbotron";
import Projects from "./Projects";
import axios from "axios";
// import ContactForm from "./ContactForm";
import { Button, Container, Card, Form } from "react-bootstrap";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    } 

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state);

    axios ({
      method: "POST",
      url: "http://localhost:3002/send",
      data:this.state
    }).then((response)=>{
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if(response.data.status === "fail") {
        alert("Message failed to send")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render () {
    return (
      <div className="about_container">
        
        <div className="row">
          <div className="col-6">
          <h1>Getting in touch</h1>
            <p className="contact-text">
              If you want to contact me about an opportunity or work, the best way to get in touch is over LinkedIn or Email.
            </p>
            <Card className="contact-card">
              <a href="https://www.linkedin.com/in/eoin-o-neill-785768134/" rel="noreferrer" target="_blank">
              <Card.Body>
                <span className="contact-card-text">LinkedIn</span>
              </Card.Body>
              </a>
            </Card>
            <Card className="contact-card">
              <a href="mailto:eoneill@live.co.uk" rel="noreferrer" target="_blank">
              <Card.Body>
                <span className="contact-card-text">Email</span>
              </Card.Body>
              </a>
            </Card>
            <p className="contact-text">
              If you want to get in touch about one of my projects, the best way to do it is on the github page that is linked on each project's card.
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <Container>
              <h2>Send me a message</h2>
              <ContactForm 
              nameValue={this.state.name} 
              onNameChange={this.onNameChange}
              emailValue={this.state.email}
              onEmailChange={this.onEmailChange}
              messageValue={this.state.message}
              onMessageChange={this.onMessageChange}
              submitHandler={this.submitHandler}
              />
            </Container>
          </div>
        </div>
      </div>
    );
  };

  

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  

}

class ContactForm extends React.Component {
  render() {
    const nameValue = this.props.nameValue;
    const onNameChange = this.props.onNameChange;
    const emailValue = this.props.emailValue;
    const onEmailChange = this.props.onEmailChange;
    const messageValue = this.props.messageValue;
    const onMessageChange = this.props.onMessageChange;
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="contactform.name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control value={nameValue} onChange={onNameChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactform.email">
            <Form.Label>Your email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" 
            value={emailValue} onChange={onEmailChange} />
          </Form.Group>
          <Form.Group className="mb-2" controlId="contactform.message">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows={3} 
            value={messageValue} onChange={onMessageChange}/>
          </Form.Group>
          <Button variant="primary" type ="submit">Send Message</Button>
        </Form>
      </div>
    );
  }
};



export default Contact;
