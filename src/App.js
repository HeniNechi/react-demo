import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./Actions/PromoCodeActions";
import { BrowserRouter,Route } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 500,
      taxes: 0,
      pickupSavings: -3.5,
      estimatedTotal: 0,
      disablePromoButton: false
    };
  }
  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Route path="/" Component></Route>
          <div className="container">
            <Container className="purchase-card">
              <Subtotal price={this.state.total.toFixed(2)} />
              <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
              <TaxesFees taxes={this.state.taxes.toFixed(2)} />
              <hr />
              <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
              <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
              <hr />
              <PromoCode
                giveDiscount={() => this.giveDiscountHandler()}
                isDisabled={this.state.disablePromoButton}
              />
            </Container>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    promoCode: state.promoCode.value
  };
};

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
