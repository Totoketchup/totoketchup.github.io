import React, { FunctionComponent } from "react";
import DarkModeSwitch from "./components/SwitchTheme";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Heart from "./components/Heart";
import Hero from "./components/Hero";
import NonoMain from "./components/nono/Main";
import MenuScoller from "./components/MenuScroller";
import { Text, Box, Icon, IconButton, Center } from "@chakra-ui/core";
import { Switch, Route, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const App: FunctionComponent = () => (
  <Body>
    <DarkModeSwitch />
    <Hero>
      <Switch>
        <Route path="/nono">
          <NonoMain />
        </Route>
        <Route path="">
          <MenuScoller>
            <a href="https://github.com/Totoketchup">GitHub</a>
            <Link to="/nono">NonoGram</Link>
            <a href="https://www.linkedin.com/in/anthony-d-amato/">LinkedIn</a>
            <a href="">Resume - CV</a>
          </MenuScoller>
        </Route>
      </Switch>
    </Hero>
    <Center>
      <Link to="">
        <IconButton
          size="lg"
          variant="outline"
          colorScheme="white"
          aria-label="Home"
          fontSize="30px"
          icon={<Icon as={AiOutlineHome} />}
          isRound={true}
        />
      </Link>
    </Center>
    <Footer>
      <Text fontSize={13}>Made with</Text>
      <Box mx={-2}>
        <Heart height={13} />
      </Box>
      <Text fontSize={13}>by Anthony D&apos;Amato</Text>
    </Footer>
  </Body>
);

export default App;
