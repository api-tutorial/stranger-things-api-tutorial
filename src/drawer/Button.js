import React from "react";
import { Button } from "antd";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "../App.css";

const MenuButton = ({ handleClick }) => (
  <Button aria-label="open menu" type="primary" onClick={handleClick}>
    <KeyboardArrowRightIcon />
  </Button>
);

export default MenuButton;
