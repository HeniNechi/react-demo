import React, { Component } from "react";
import {
  Button,
  Collapse,
  Card,
  Form,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl
} from "react-bootstrap";

import { connect } from "react-redux";
import { handleChange } from "../../Actions/PromoCodeActions";

class PromoCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: ""
    };
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply` : `Hide `} Promo Code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Row className="show-container">
                <Col md={12}>
                  <Form className="form">
                    <FormGroup controlId="formInLineName">
                      <FormLabel>Promo Code</FormLabel>
                      <FormControl
                        type="text"
                        
                        placeholder="Enter Promo Code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      block
                      variant="success"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    promoCode: state.promoCode.value
  };
};

// const mapDispatchToProps = dispatch =>{
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }
export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
