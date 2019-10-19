import React, { Component } from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";

var Styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "red",
    fontWeight: 600
  }
};

export default class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store cut costs, and we pass the savings
          on to you.
        </p>
      </Tooltip>
    );

    return (
      <Row className="show-container">
        <Col md={6}>
          <OverlayTrigger placement="bottom" overlay={tooltip}>
            <div style={Styles.pickupSavings}>Pickup Savings</div>
          </OverlayTrigger>
        </Col>
        <Col style={Styles.totalSavings} md={6}>
          {`$${this.props.price}`}
        </Col>
      </Row>
    );
  }
}
