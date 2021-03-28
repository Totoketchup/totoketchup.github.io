import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const customTheme = extendTheme({
  useSystemColorMode: true,
});

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
