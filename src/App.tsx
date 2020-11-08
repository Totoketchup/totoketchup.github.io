import React, { FunctionComponent } from "react";
import DarkModeSwitch from "./components/SwitchTheme";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { Center } from "@chakra-ui/core";

const App: FunctionComponent = () => (
  <div>
    <DarkModeSwitch />
    <Center h="0px">
      <Menu />
    </Center>
    <Hero>
      <span>Welcome</span>
    </Hero>
  </div>
);

export default App;
