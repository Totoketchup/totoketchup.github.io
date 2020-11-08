import React, { FunctionComponent } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MyMenu: FunctionComponent = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Home
      </MenuButton>
      <MenuList>
        <MenuItem>Link1</MenuItem>
        <MenuItem>Link2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MyMenu;
