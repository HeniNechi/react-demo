import React, { Component } from "react";
import { Button, Collapse, Card, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <Card>
            <Media>
              <div>
                <img
                  variant="left"
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://cdn-yams.schibsted.com/api/v1/tenants/dd1f88aa-e3e2-450c-9fa9-a03ea59a6bf0/domains/57a9d53a-fe30-4b6f-a4de-d624bd25134b/buckets/8f139e2f-9e74-4be3-9d30-d8f180f02fbb/images/02/027e4ef2-724b-40ed-a02d-e0f95aff9186?rule=progressive"
                />
              </div>
              <Media.Body>
                <p>Iphone 7 Noir 64gb </p>
                <Row className="show-container">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">
                      {`$${this.props.price}`}{" "}
                    </strong>
                  </Col>
                  <Col md={6}>Qty:1</Col>
                </Row>
              </Media.Body>
            </Media>
          </Card>
        </Collapse>
      </div>
    );
  }
}
