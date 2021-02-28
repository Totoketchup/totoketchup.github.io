import React, { useState } from "react";
import propTypes from "prop-types";
import { Heading, Stack } from "@chakra-ui/core";
import { ChevronRightIcon } from "@chakra-ui/icons";

const MenuScroller: React.FC = ({ children }) => {
  const [center, setCenter] = useState(0);
  const m = 0.2;
  const max = 0.9;

  return (
    <Stack align="center">
      {React.Children.map(children, (child, i) => {
        const size = center == i ? "4xl" : "xl";
        const arrow = center == i ? <ChevronRightIcon /> : null;
        const opacity = Math.min((i < center ? 1 : -1) * (center - i) * m, max);
        console.log(1 - opacity);
        return (
          <Heading
            size={size}
            key={i}
            opacity={1 - opacity}
            onMouseEnter={() => setCenter(i)}
            transition="0.3s"
          >
            {child}
            {arrow}
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
