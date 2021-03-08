import { Button, IconButton, MenuItem, MenuList } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import {
  PopperMenu,
  PopperMenuButton,
  PopperMenuContent
} from "../components/PopperMenu";

export default function test() {
  return (
    <PopperMenu>
      <PopperMenuButton>
        <IconButton edge="start">
          <MenuIcon />
        </IconButton>
      </PopperMenuButton>
      <PopperMenuContent>
        <MenuList>
          <MenuItem>Home</MenuItem>
          <MenuItem>About US</MenuItem>
          <MenuItem>Create Your Plan</MenuItem>
        </MenuList>
      </PopperMenuContent>
    </PopperMenu>
  );
}
