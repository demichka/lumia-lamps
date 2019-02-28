import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Products from '../Products/index';


export default class StartPage extends React.Component {
  render() {
    return <Container>
        <Row>
          <Col sm="8" className="mx-auto">
          <div>
            <h1>StartPage</h1>
            <Products />
          </div>
          </Col>
        </Row>
  </Container>
  }
}