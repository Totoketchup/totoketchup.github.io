import { Color } from "./colors";
import { Hint, AlignedHints, GridHints } from "./hints";

type Image2D = Color[][];
type Image1D = Color[];

export default class NonoImage {
  data: Image1D;
  nbLines: number;
  nbCols: number;

  constructor(data: Image1D, nbLines: number, nbCols: number) {
    if (data.length != nbLines * nbCols) {
      throw new Error(
        "Data size doesn't correspond to the given nbCols/nbLines."
      );
    }
    this.data = data;
    this.nbCols = nbCols;
    this.nbLines = nbLines;
  }

  static fromImage2D(data: Image2D): NonoImage {
    const nbLines = data.length;

    if (nbLines == 0 || (nbLines == 1 && data[0].length == 0)) {
      throw new Error("Image data should not be empty.");
    }

    const nbCols = data[0].length;

    if (!data.every((line) => line.length == nbCols)) {
      throw new Error(
        "The image is neither a Square nor a Rectangle: line sizes are not consistent."
      );
    }

    return new NonoImage(flatten(data), nbLines, nbCols);
  }

  static full(nbLines: number, nbCols: number, color: Color): NonoImage {
    return new NonoImage(Array(nbCols * nbLines).fill(color), nbLines, nbCols);
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

  public set(index: number, color: Color): void {
    this.data[index] = color;
  }

  public get(index: number): Color {
    return this.data[index];
  }

  public get2D(indexLine: number, indexCol: number): Color {
    return this.data[this.getNbCols() * indexLine + indexCol];
  }

  public set2D(indexLine: number, indexCol: number, color: Color): void {
    this.data[this.getNbCols() * indexLine + indexCol] = color;
  }

  public isEqual(other: NonoImage): boolean {
    return (
      this.data.every((element, index) => element == other.data[index]) &&
      other.nbCols == this.nbCols &&
      this.nbLines == other.nbLines
    );
  }

  public transpose(): NonoImage {
    const reversed: Image1D = [];

    for (let indexCol = 0; indexCol < this.nbCols; indexCol++) {
      for (let indexLine = 0; indexLine < this.nbLines; indexLine++) {
        reversed.push(this.get2D(indexLine, indexCol));
      }
    }
    return new NonoImage(reversed, this.nbCols, this.nbLines);
  }

  public toHints(): GridHints {
    const lineHints = this.extractLineHints();
    const colsHints = this.transpose().extractLineHints();

    return new GridHints(lineHints, colsHints);
  }

  extractLineHints(): AlignedHints[] {
    const hints: AlignedHints[] = [];

    for (let indexLine = 0; indexLine < this.getNbLines(); indexLine++) {
      const alignedHints: Hint[] = [];
      let currentColor = this.get2D(indexLine, 0);
      let nb = 1;

      for (let indexCol = 1; indexCol < this.getNbCols(); indexCol++) {
        const color: Color = this.get2D(indexLine, indexCol);
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

  public clone(): NonoImage {
    return new NonoImage(this.data, this.nbLines, this.nbCols);
  }
}

function flatten(image: Image2D): Image1D {
  return image.reduce(
    (accumulator, value) => accumulator.concat(value),
    [] as Image1D
  );
}
