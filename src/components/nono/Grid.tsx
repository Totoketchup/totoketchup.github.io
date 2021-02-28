import React, { useState } from "react";
import propTypes from "prop-types";
import NonoImage from "../../core/nono/image";
import { Black, Cross, White } from "../../core/nono/colors";
import { SimpleGrid } from "@chakra-ui/core";
import Cell from "./Cell";
import NonoGrid from "../../core/nono/image";

type GridProps = {
  nbCols: number;
  nbLines: number;
  onGridChange: (grid: NonoImage) => void;
};

const initialGrid = (nbLines: number, nbCols: number) =>
  NonoGrid.fromColorArray(
    Array(nbCols * nbLines)
      .fill(1)
      .map((x, y) => x + y)
      .map(() => White),
    nbLines,
    nbCols
  );

const Grid: React.FunctionComponent<GridProps> = ({
  nbCols,
  nbLines,
  onGridChange,
}) => {
  const [grid, setGrid] = useState(initialGrid(nbLines, nbCols));

  const onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const cell = grid.getIndex(index);
    if (cell.isEqual(Black)) {
      const newGrid = grid.setIndex(index, White);
      setGrid(newGrid);
      onGridChange(newGrid);
    } else {
      const newGrid = grid.setIndex(index, Black);
      setGrid(newGrid);
      onGridChange(newGrid);
    }
  };

  const onRightClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const cell = grid.getIndex(index);

    if (cell.isEqual(Cross)) {
      const newGrid = grid.setIndex(index, White);
      setGrid(newGrid);
      onGridChange(newGrid);
    } else {
      const newGrid = grid.setIndex(index, Cross);
      setGrid(newGrid);
      onGridChange(newGrid);
    }
  };

  return (
    <SimpleGrid
      columns={nbCols}
      spacing="2px"
      bg="grey"
      style={{
        gridColumn: `span ${nbCols}`,
        gridRow: `span ${nbLines}`,
      }}
      padding="2px"
      borderRadius="10px"
    >
      {grid.flatten().map((color, i) => (
        <Cell
          key={i}
          size={100}
          color={color}
          index={i}
          onClick={onClick}
          onRightClick={onRightClick}
        ></Cell>
      ))}
    </SimpleGrid>
  );
};

Grid.propTypes = {
  nbCols: propTypes.number.isRequired,
  nbLines: propTypes.number.isRequired,
  onGridChange: propTypes.func.isRequired,
};

export default Grid;
