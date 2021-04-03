import React from "react";
import propTypes from "prop-types";
import { Color } from "../../core/nono/colors";
import { Box } from "@chakra-ui/core";

type CellProps = {
  size: number;
  color: Color;
  index: number;
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
  onRightClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
};

const Cell: React.FunctionComponent<CellProps> = ({
  onClick,
  onRightClick,
  size,
  color,
  index,
}) => {
  const onClickFun = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event, index);
  };

  const onRightClickFun = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onRightClick(event, index);
  };

  return (
    <Box
      bg={color.toCSSRGB()}
      height={`${size}px`}
      width={`${size}px`}
      borderRadius={size / 10}
      onClick={onClickFun}
      onContextMenu={onRightClickFun}
    />
  );
};

Cell.defaultProps = {
  size: 100,
};

Cell.propTypes = {
  size: propTypes.number.isRequired,
  color: propTypes.instanceOf(Color).isRequired,
  index: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
  onRightClick: propTypes.func.isRequired,
};

export default Cell;
