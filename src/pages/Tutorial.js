import React from "react";
import { Divider } from "../components";
import Prerequisites from "../tutorial-steps/Prerequisites";
import SetUp from "../tutorial-steps/SetUp";
import One from "../tutorial-steps/One";
import Two from "../tutorial-steps/Two";
import Three from "../tutorial-steps/Three";
import Four from "../tutorial-steps/Four";
import Five from "../tutorial-steps/Five";
import Six from "../tutorial-steps/Six";
import "../App.css";
import { Introduction } from "../tutorial-steps/Introduction";

const Tutorial = () => (
  <>
    <Introduction />
    <Prerequisites />
    <Divider id="set-up" flickerSpeed="slow" />
    <SetUp />
    <Divider id="step-1" />
    <One />
    <Divider id="step-2" flickerSpeed="fast" />
    <Two />
    <Divider id="step-3" flickerSpeed="slow" />
    <Three />
    <Divider id="step-4" flickerSpeed="slow" />
    <Four />
    <Divider id="step-5" />
    <Five />
    <Divider id="step-6" />
    <Six />
    <h4>
      Share your APIs with us on Twitter!{" "}
      <a href="https://twitter.com/katerj">@katerj</a> and{" "}
      <a href="https://twitter.com/paigeegorry">@paigeegorry</a>
    </h4>
  </>
);

export default Tutorial;
