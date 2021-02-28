import { Flex } from "@chakra-ui/core";
import React from "react";
import propTypes from "prop-types";

const Footer: React.FC = ({ children }) => (
  <Flex
    flexShrink={0}
    flexBasis="30px"
    direction="row"
    m="10px"
    justifyContent="flex-end"
    alignItems="baseline"
  >
    {children}
  </Flex>
);

Footer.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default Footer;
