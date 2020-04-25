import React, { useState } from "react";
import { Button } from "antd";
import "./App.css";

const MenuButton = ({ handleClick }) => (
  <Button type="primary" onClick={handleClick}>
    MENU
  </Button>
);

export default MenuButton;
