import { Image } from "@chakra-ui/core";
import { Color } from "./colors";
import { Hint, AlignedHints, GridHints } from "./hints";

type Image = Color[][];

export default class NonoImage {
  data: Image;
  nbLines: number;
  nbCols: number;

  constructor(data: Image) {
    this.data = data;
    this.nbLines = data.length;

    this.nonEmpty();

    this.nbCols = data[0].length;

    this.consistentSize();
  }

  static fromColorArray(
    colors: Color[],
    nbLines: number,
    nbCols: number
  ): NonoImage {
    const image: Color[][] = [];
    for (let indexLine = 0; indexLine < nbLines; indexLine++) {
      image.push([]);
    }

    for (let indexLine = 0; indexLine < nbLines; indexLine++) {
      for (let indexCol = 0; indexCol < nbCols; indexCol++) {
        image[indexLine].push(colors[indexLine * nbCols + indexCol]);
      }
    }

    return new NonoImage(image);
  }

  nonEmpty(): void {
    if (this.nbLines == 0 || (this.nbLines == 1 && this.data[0].length == 0)) {
      throw new Error("Image data should not be empty.");
    }
  }

  consistentSize(): void {
    if (!this.data.every((line) => line.length == this.nbCols)) {
      throw new Error(
        "The image is neither a Square nor a Rectangle: line sizes are not consistent."
      );
    }
  }

  /**
   * getNbCols
   */
  public getNbCols(): number {
    return this.nbCols;
  }

  /**
   * getNbLines
   */
  public getNbLines(): number {
    return this.nbLines;
  }

  public getLine(index: number): Color[] {
    return this.data[index];
  }

  public isEqual(other: NonoImage): boolean {
    return (
      this.flatten().every(
        (element, index) => element == other.flatten()[index]
      ) &&
      other.nbCols == this.nbCols &&
      this.nbLines == other.nbLines
    );
  }

  flatten(): Color[] {
    return this.data.reduce(
      (accumulator, value) => accumulator.concat(value),
      [] as Color[]
    );
  }

  public transpose(): NonoImage {
    const reversed: Color[][] = [];
    for (let indexCol = 0; indexCol < this.nbCols; indexCol++) {
      reversed.push([]);
    }

    for (let indexCol = 0; indexCol < this.nbCols; indexCol++) {
      for (let indexLine = 0; indexLine < this.nbLines; indexLine++) {
        reversed[indexCol].push(this.data[indexLine][indexCol]);
      }
    }
    return new NonoImage(reversed);
  }

  public toHints(): GridHints {
    const lineHints = extractLineHints(this);
    const colsHints = extractLineHints(this.transpose());

    return new GridHints(lineHints, colsHints);
  }

  public setIndex(index: number, color: Color): NonoImage {
    const newData = this.flatten().map((cell, i) =>
      index == i ? color : cell
    );
    return NonoImage.fromColorArray(newData, this.nbLines, this.nbCols);
  }

  public getIndex(index: number): Color {
    return this.data[Math.floor(index / this.nbCols)][index % this.nbCols];
  }
}

function extractLineHints(image: NonoImage): AlignedHints[] {
  const hints: AlignedHints[] = [];

  for (let indexLine = 0; indexLine < image.nbLines; indexLine++) {
    const line = image.getLine(indexLine);

    const alignedHints: Hint[] = [];
    let currentColor = line[0];
    let nb = 1;

    for (let indexCol = 1; indexCol < line.length; indexCol++) {
      const color: Color = line[indexCol];
      if (color.isEqual(currentColor)) {
        nb++;
      } else {
        if (!currentColor.isEmpty()) {
          alignedHints.push(new Hint(nb, currentColor));
        }
        nb = 1;
        currentColor = color;
      }
    }
    if (!currentColor.isEmpty()) {
      alignedHints.push(new Hint(nb, currentColor));
    }
    hints.push(new AlignedHints(alignedHints));
  }
  return hints;
}
