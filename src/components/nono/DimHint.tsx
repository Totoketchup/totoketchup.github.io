import React from "react";
import propTypes from "prop-types";
import { AlignedHints } from "../../core/nono/hints";
import { Box, Flex } from "@chakra-ui/core";

export type Direction = "row" | "column";

type DimHintProps = {
  hints: AlignedHints;
  direction: Direction;
};

const DimHint: React.FunctionComponent<DimHintProps> = ({
  hints,
  direction,
}) => (
  <Flex flexDirection={direction}>
    {hints.getHints().map((hint, index) => (
      <Box
        textColor={hint.getColor().toCSSRGB()}
        key={index}
        style={{ margin: 2 }}
      >
        {hint.getNumber()}
      </Box>
    ))}
  </Flex>
);

DimHint.propTypes = {
  hints: propTypes.instanceOf(AlignedHints).isRequired,
  direction: propTypes.oneOf<Direction>(["row", "column"]).isRequired,
};

export default DimHint;
