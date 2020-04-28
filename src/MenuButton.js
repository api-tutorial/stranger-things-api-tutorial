import React from "react";
import { Button } from "antd";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import "./App.css";

const MenuButton = ({ handleClick }) => (
  <Button aria-label="open menu" type="primary" onClick={handleClick}>
    <MenuOpenIcon />
  </Button>
);

export default MenuButton;
