import { Color } from "./colors";

class Hint {
  number: number;
  color: Color;

  constructor(number: number, color: Color) {
    this.number = number;
    this.color = color;
  }

  public isEqual(other: Hint): boolean {
    return this.number == other.number && this.color.isEqual(other.color);
  }

  public getColor(): Color {
    return this.color;
  }

  public getNumber(): number {
    return this.number;
  }
}

class AlignedHints {
  hints: Hint[];

  constructor(hints: Hint[]) {
    this.hints = hints;
  }

  public isEqual(other: AlignedHints): boolean {
    return (
      this.hints.length == other.hints.length &&
      this.hints.every((hint, index) => hint.isEqual(other.hints[index]))
    );
  }

  public getHints(): Hint[] {
    return this.hints;
  }
}

class GridHints {
  linesHints: AlignedHints[];
  colsHints: AlignedHints[];

  constructor(linesHints: AlignedHints[], colsHints: AlignedHints[]) {
    this.linesHints = linesHints;
    this.colsHints = colsHints;
  }

  public getLinesHints(): AlignedHints[] {
    return this.linesHints;
  }

  public getColsHints(): AlignedHints[] {
    return this.colsHints;
  }

  public isEqual(other: GridHints): boolean {
    return (
      this.colsHints.length == other.colsHints.length &&
      this.linesHints.length == other.linesHints.length &&
      this.linesHints.every((alignedLineHint, index) =>
        alignedLineHint.isEqual(other.linesHints[index])
      ) &&
      this.colsHints.every((alignedColHint, index) =>
        alignedColHint.isEqual(other.colsHints[index])
      )
    );
  }
}

export { Hint, AlignedHints, GridHints };
