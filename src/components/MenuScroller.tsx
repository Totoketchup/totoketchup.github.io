import React, { useState } from "react";
import propTypes from "prop-types";
import { Heading, Stack, Flex } from "@chakra-ui/core";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MenuScroller: React.FC = ({ children }) => {
  const [center, setCenter] = useState(0);
  const m = 0.2;
  const max = 0.9;

  return (
    <Stack align="center" spacing="0px">
      {React.Children.map(children, (child, i) => {
        const size = center == i ? 1 : 0.5;
        const rotation = center == i ? -90 : 0;
        const opacity = Math.min((i < center ? 1 : -1) * (center - i) * m, max);
        return (
          <Heading
            key={i}
            opacity={1 - opacity}
            onMouseEnter={() => setCenter(i)}
            transition="0.25s"
            flexDirection="row"
            fontSize={{
              base: `${size * 3.5}rem`,
              md: `${size * 8}rem`,
              lg: `${size * 3.5}rem`,
            }}
          >
            <Flex>
              {child}
              <motion.div animate={{ rotate: rotation }}>
                <ChevronDownIcon />
              </motion.div>
            </Flex>
          </Heading>
        );
      })}
    </Stack>
  );
};

MenuScroller.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};
export default MenuScroller;
