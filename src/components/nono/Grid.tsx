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
  cellSize: number;
  onGridChange: (grid: NonoImage) => void;
};

const initialGrid = (nbLines: number, nbCols: number) =>
  NonoGrid.full(nbLines, nbCols, White);

const Grid: React.FunctionComponent<GridProps> = ({
  nbCols,
  nbLines,
  onGridChange,
  cellSize,
}) => {
  const [grid, setGrid] = useState(initialGrid(nbLines, nbCols));

  const onClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const cell = grid.get(index);

    if (cell.isEqual(Black)) {
      grid.set(index, White);
    } else {
      grid.set(index, Black);
    }
    const newGrid = grid.clone();
    setGrid(newGrid);
    onGridChange(newGrid);
  };

  const onRightClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    const cell = grid.get(index);

    if (cell.isEqual(Cross)) {
      grid.set(index, White);
    } else {
      grid.set(index, Cross);
    }
    const newGrid = grid.clone();
    setGrid(newGrid);
    onGridChange(newGrid);
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
      {grid.data.map((color, i) => (
        <Cell
          key={i}
          size={cellSize}
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
  cellSize: propTypes.number.isRequired,
};

export default Grid;
