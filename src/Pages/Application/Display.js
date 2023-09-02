import React, { Component } from 'react';
import ApplicationNav from '../../components/Navbar';
import { Button, Col, Row } from 'react-bootstrap';

class Application extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const { mode } = this.props
    console.log(mode,"mode")
    return (
      <div>
        <ApplicationNav />
        <Row className='m-0 p-0'>
          <Col>
            
          </Col>
        </Row>
      </div>
    );
  }
}

export default Application;