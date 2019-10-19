import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

const intialState = {};
const middleware = [thunk];

const Store = createStore(rootReducer,intialState,
compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default Store