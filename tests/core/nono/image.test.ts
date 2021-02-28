import { expect } from "chai";
import NonoImage from "../../../src/core/nono/image";
import { Empty, Black } from "../../../src/core/nono/colors";
import { Hint, AlignedHints, GridHints } from "../../../src/core/nono/hints";

describe("NonoImage", function () {
  it("Should fail on empty lines", function () {
    expect(function () {
      new NonoImage([]);
    }).to.throw(Error);
  });

  it("Should fail on empty cols", function () {
    expect(function () {
      new NonoImage([[]]);
    }).to.throw(Error);
  });

  it("Should fail on non square/rectangle image", function () {
    expect(function () {
      new NonoImage([
        [Empty, Black],
        [Black, Empty, Black],
      ]);
    }).to.throw(Error);
  });

  it("Successfully created", function () {
    new NonoImage([
      [Empty, Empty],
      [Empty, Empty],
    ]);
  });

  it("nbLines is correct", function () {
    const image = new NonoImage([
      [Empty, Empty, Empty],
      [Empty, Empty, Empty],
    ]);
    expect(image.getNbLines()).to.be.equal(2);
  });

  it("nbCols is correct", function () {
    const image = new NonoImage([
      [Empty, Empty, Empty],
      [Empty, Empty, Empty],
    ]);
    expect(image.getNbCols()).to.be.equal(3);
  });

  it("transposes correctly", function () {
    const image = new NonoImage([
      [Black, Empty, Empty],
      [Empty, Black, Empty],
      [Empty, Empty, Black],
      [Empty, Black, Black],
      [Black, Black, Empty],
      [Black, Black, Black],
      [Empty, Empty, Empty],
    ]);

    const expectedImage = new NonoImage([
      [Black, Empty, Empty, Empty, Black, Black, Empty],
      [Empty, Black, Empty, Black, Black, Black, Empty],
      [Empty, Empty, Black, Black, Empty, Black, Empty],
    ]);

    expect(image.transpose().isEqual(expectedImage)).to.be.true;
  });

  it("extract hints (1x1) full", function () {
    const image = new NonoImage([[Black]]);

    const hints = image.toHints();

    const expectedHints = new GridHints(
      [new AlignedHints([new Hint(1, Black)])],
      [new AlignedHints([new Hint(1, Black)])]
    );

    expect(hints.isEqual(expectedHints)).to.be.true;
  });

  it("extract hints (1x1) empty", function () {
    const image = new NonoImage([[Empty]]);

    const hints = image.toHints();

    const expectedHints = new GridHints(
      [new AlignedHints([])],
      [new AlignedHints([])]
    );

    expect(hints.isEqual(expectedHints)).to.be.true;
  });

  it("extract hints (7x3)", function () {
    const image = new NonoImage([
      [Black, Empty, Empty],
      [Empty, Black, Empty],
      [Empty, Empty, Black],
      [Empty, Black, Black],
      [Black, Black, Empty],
      [Black, Black, Black],
      [Empty, Empty, Empty],
    ]);

    const hints = image.toHints();

    const expectedHints = new GridHints(
      [
        new AlignedHints([new Hint(1, Black)]),
        new AlignedHints([new Hint(1, Black)]),
        new AlignedHints([new Hint(1, Black)]),
        new AlignedHints([new Hint(2, Black)]),
        new AlignedHints([new Hint(2, Black)]),
        new AlignedHints([new Hint(3, Black)]),
        new AlignedHints([]),
      ],
      [
        new AlignedHints([new Hint(1, Black), new Hint(2, Black)]),
        new AlignedHints([new Hint(1, Black), new Hint(3, Black)]),
        new AlignedHints([new Hint(2, Black), new Hint(1, Black)]),
      ]
    );

    expect(hints.isEqual(expectedHints)).to.be.true;
  });
});
