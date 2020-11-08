import { Switch, useColorMode } from "@chakra-ui/core";
import React, { FunctionComponent } from "react";

const ColorSwitch: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};

export default ColorSwitch;
