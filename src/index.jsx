import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import "antd/dist/reset.css";
import { pokemonsReducer } from "./store/reducers/reducerObject";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import App from "./components/App/index";
import { featuring, logger } from "./middleware";
const root = ReactDOM.createRoot(document.getElementById("root"));

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger /*featuring*/)
);
const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
