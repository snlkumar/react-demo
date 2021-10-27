import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import RootReducer from './reducers/index'

const store = createStore(RootReducer, applyMiddleware(thunkMiddleware));

export default store;
