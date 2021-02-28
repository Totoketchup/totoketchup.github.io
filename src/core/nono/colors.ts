class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r: number, g: number, b: number, a = 1) {
    this.r = r;
    (this.g = g), (this.b = b), (this.a = a);
  }

  static Empty(): Color {
    return new Color(0, 0, 0, 0);
  }

  static Black(): Color {
    return new Color(0, 0, 0);
  }

  static Cross(): Color {
    return new Color(256, 0, 0);
  }

  static White(): Color {
    return new Color(256, 256, 256);
  }

  static Hint(): Color {
    return new Color(-2, -2, -2);
  }

  isEqual(other: Color): boolean {
    return (
      this.r === other.r &&
      this.g === other.g &&
      this.b === other.b &&
      this.a === other.a
    );
  }

  isEmpty(): boolean {
    return this.isEqual(Empty);
  }

  toCSSRGB(): string {
    return `rgb(${this.r},${this.g},${this.b},${this.a})`;
  }
}

const Empty = Color.Empty();
const Black = Color.Black();
const Cross = Color.Cross();
const Hint = Color.Hint();
const White = Color.White();

export { Color, Empty, Black, Cross, Hint, White };
