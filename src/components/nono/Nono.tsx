import React from "react";
import propTypes from "prop-types";
import NonoImage from "../../core/nono/image";
import { Black, Empty } from "../../core/nono/colors";
import { Center, Grid, GridItem } from "@chakra-ui/core";
import DimHint from "./DimHint";
import NonoGrid from "./Grid";

type NonoProps = {
  image: NonoImage;
  cellSize: number;
};

const Nono: React.FunctionComponent<NonoProps> = ({ image, cellSize }) => {
  const hints = image.toHints();
  const linesHints = hints.getLinesHints();
  const colsHints = hints.getColsHints();

  const lineHints = linesHints.map((hint, index) => (
    <Center key={index}>
      <DimHint hints={hint} direction="row" />
    </Center>
  ));

  const colHints = colsHints.map((hint, index) => (
    <Center key={index}>
      <DimHint hints={hint} direction="column" />
    </Center>
  ));

  const onGridChange = (grid: NonoImage) => {
    if (
      new NonoImage(
        grid.data.map((color) => (color.isEqual(Black) ? Black : Empty)),
        grid.nbLines,
        grid.nbCols
      ).isEqual(image)
    ) {
      console.log("WIN!");
    }
  };

  return (
    <Grid
      templateRows={`${cellSize}px repeat(${image.getNbLines()}, 1fr)`}
      templateColumns={`${cellSize}px repeat(${image.getNbCols()}, 1fr)`}
      gap={`${cellSize / 25}px`}
    >
      <GridItem colSpan={1} rowSpan={1} bg="tomato">
        <Center>Timer</Center>
      </GridItem>
      <GridItem
        colSpan={image.getNbCols()}
        rowSpan={1}
        bg="tomato"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
        }}
      >
        {colHints}
      </GridItem>
      <GridItem
        colSpan={1}
        rowSpan={image.getNbLines()}
        bg="tomato"
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {lineHints}
      </GridItem>
      <NonoGrid
        nbCols={image.getNbCols()}
        nbLines={image.getNbLines()}
        onGridChange={onGridChange}
        cellSize={cellSize}
      />
    </Grid>
  );
};

Nono.defaultProps = {
  image: NonoImage.fromImage2D([
    [Black, Black, Black],
    [Black, Black, Black],
    [Black, Empty, Black],
    [Black, Black, Black],
    [Black, Black, Black],
    [Black, Empty, Black],
    [Black, Black, Black],
    [Black, Empty, Black],
    [Black, Black, Black],
  ]),
  cellSize: 100,
};

Nono.propTypes = {
  image: propTypes.instanceOf(NonoImage).isRequired,
};

export default Nono;
