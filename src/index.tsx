import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import App from "./App";

const customTheme = extendTheme({
  useSystemColorMode: true,
});

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
