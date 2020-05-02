import React from "react";
import { Button } from "antd";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import "../App.css";

const MenuButton = ({ handleClick }) => (
  <Button aria-label="open menu" type="primary" onClick={handleClick}>
    {/* <MenuOpenIcon /> */}
    <KeyboardArrowLeftIcon />
  </Button>
);

export default MenuButton;
