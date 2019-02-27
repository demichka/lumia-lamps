import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';



export default class StartPage extends React.Component {
  render() {
    return <Container>
        <Row>
          <Col sm="8" className="mx-auto">
            <h1>StartPage</h1>
          </Col>
        </Row>
  </Container>
  }
}