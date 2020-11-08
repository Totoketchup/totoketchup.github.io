import ReactDOM from "react-dom";
import React, { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/core";
import DarkModeSwitch from "./components/SwitchTheme";
import Hero from "./components/Hero";

const App = () => (
  <div>
    <DarkModeSwitch />
    <Hero>
      <span>Welcome</span>
    </Hero>
  </div>
);

ReactDOM.render(
  <StrictMode>
    <ChakraProvider resetCSS={true}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
