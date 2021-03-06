import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export default class Subtotal extends Component {
  render() {
    return (
      <Row className="show-container">
        <Col md={6}>Subtotal</Col>
        <Col md={6}>{`$${this.props.price}`}</Col>
      </Row>
    );
  }
}
