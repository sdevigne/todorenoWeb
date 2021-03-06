import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
