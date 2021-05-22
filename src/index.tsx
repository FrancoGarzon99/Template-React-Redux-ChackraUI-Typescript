import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import Store from "./redux/Store";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeChakra from "./styles/ThemeChackraUI";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <ChakraProvider theme={ThemeChakra}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
