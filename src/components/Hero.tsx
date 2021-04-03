import { Flex } from "@chakra-ui/core";
import React, { FunctionComponent } from "react";
import propTypes from "prop-types";

const Hero: FunctionComponent = (props) => (
  <Flex justifyContent="center" alignItems="center" flexGrow={1}>
    {props.children}
  </Flex>
);

Hero.propTypes = {
  children: propTypes.object.isRequired,
};

export default Hero;
