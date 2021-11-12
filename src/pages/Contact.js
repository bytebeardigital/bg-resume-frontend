import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import QuickContact from '../components/QuickContact';
import MapComponent from '../components/MapComponent';

class Contact extends React.Component {
    state = {
        submitButton: ""
    }
    formAgree = () => {
        
    }
    render() {
        return (
            <Container className="contactPage">
                <Row className="justify-content-between">
                    <Col lg={5}>
                       <ContactForm formAgreeProps={this.formAgree}/>
                       <QuickContact/>
                    </Col>
                    <Col lg={6}>
                        <MapComponent/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;