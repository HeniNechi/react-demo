import { PROMO_CODE } from "../Actions/ActionTypes";
const intialState = {
  open: false,
  value: ""
};

const PromoCodeReducer = (state = intialState, action) => {
  switch (action.type) {
    case PROMO_CODE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};
export default PromoCodeReducer;
