import React, { useState } from "react";
import { Divider } from "../components";
import Sandbox from "../Sandbox";
import data from "../data/example-data.json";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../App.css";

const panelStyle = {
  background: "black",
  color: "#d9d9d9",
};

const expandIcon = <ExpandMoreIcon style={{ color: "white" }} />;

const Documentation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="endpoints">
        <h3>Endpoints</h3>
        <p>stranger-things-api.herokuapp.com/</p>
        <ul className="endpoints-list">
          <li>
            <ExpansionPanel
              style={panelStyle}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="bold">GET all characters</span>{" "}
                /api/v1/characters
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.all, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              style={panelStyle}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="bold">GET by ID</span> /api/v1/characters/:id
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.id, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              style={panelStyle}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="bold">GET random character(s)</span>{" "}
                /api/v1/characters/random?count=1
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.random, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              style={panelStyle}
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="bold">GET by query</span>{" "}
                /api/v1/characters?name=Mike+Wheeler
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <div className="queries-box">
                  <h3>Available Queries</h3>
                  <p>
                    aliases, otherRelations, affiliation, occupation, residence,
                    appearsInEpisodes, status, gender, eyeColor, born,
                    hairColor, portrayedBy
                  </p>
                </div>
                <pre>{JSON.stringify(data.name, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              style={panelStyle}
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="bold">GET all with pagination</span>{" "}
                /api/v1/characters?perPage=5?page=1
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.pagination, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
        </ul>
      </section>
      <Divider />
      <Sandbox />
    </>
  );
};

export default Documentation;
