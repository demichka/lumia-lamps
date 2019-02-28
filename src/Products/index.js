import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Search from '../Search';

export default class Products extends React.Component {

getData(){
 this.Lamps = require("../lamps.json");
} 


  rerender(){
    this.setState({ state: this.state });
  }

  render(){
    return <Container className="Products">
      <Row>
        <Col xs="12">
          < Search />
        </Col>
      </Row>
    </Container>
  }
}