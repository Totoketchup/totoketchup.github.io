import React, { FunctionComponent } from "react";
import DarkModeSwitch from "./components/SwitchTheme";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Heart from "./components/Heart";
import Hero from "./components/Hero";
import MenuScoller from "./components/MenuScroller";
import { Text, Box } from "@chakra-ui/core";

const App: FunctionComponent = () => (
  <>
    <Body>
      <DarkModeSwitch />
      <Hero>
        <MenuScoller>
          <a href="https://github.com/Totoketchup">GitHub</a>
          <a href="">NonoGram</a>
          <a href="">Articles</a>
          <a href="">Resume - CV</a>
          <a href="">About me</a>
        </MenuScoller>
      </Hero>
      <Footer>
        <Text fontSize={13}>Made with</Text>
        <Box mx={-2}>
          <Heart height={13} />
        </Box>
        <Text fontSize={13}>by Anthony D&apos;Amato</Text>
      </Footer>
    </Body>
  </>
);

export default App;
