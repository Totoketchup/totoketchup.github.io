import React from "react";
import NonoImage from "../../core/nono/image";
import { Black, Empty } from "../../core/nono/colors";
import Nono from "./Nono";

const NonoMain: React.FunctionComponent = () => {
  return (
    <Nono
      image={NonoImage.fromImage2D([
        [Black, Black, Black],
        [Black, Black, Black],
        [Black, Empty, Black],
        [Black, Black, Black],
        [Black, Black, Black],
        [Black, Empty, Black],
        [Black, Black, Black],
        [Black, Empty, Black],
        [Black, Black, Black],
      ])}
      cellSize={55}
    ></Nono>
  );
};

export default NonoMain;
