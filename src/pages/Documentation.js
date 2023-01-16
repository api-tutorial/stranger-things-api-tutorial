import React, { useState } from "react";
import Sandbox from "../Sandbox";
import data from "../data/example-data.json";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../App.css";

const expandIcon = <ExpandMoreIcon style={{ color: "white" }} />;

const Documentation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className="endpoints">
        <h3>Endpoints</h3>
        <p>stranger-things-api.fly.dev/</p>
        <ul className="endpoints-list">
          <li>
            <ExpansionPanel
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={expanded === "panel1" ? "active-item" : ""}
              >
                <span className="bold">GET all characters</span>
                <span>api/v1/characters</span>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.all, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={expanded === "panel2" ? "active-item" : ""}
              >
                <span className="bold">GET by ID</span>
                <span>api/v1/characters/:id</span>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.id, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={expanded === "panel3" ? "active-item" : ""}
              >
                <span className="bold">GET random character(s)</span>{" "}
                api/v1/characters/random?count=1
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.random, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={expanded === "panel4" ? "active-item" : ""}
              >
                <span className="bold">GET by query</span>{" "}
                api/v1/characters?name=Mike+Wheeler
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <div className="queries-box">
                  <h3>Available Queries</h3>
                  <p>
                    name, aliases, otherRelations, affiliation, occupation,
                    residence, appearsInEpisodes, status, gender, eyeColor,
                    born, hairColor, portrayedBy
                  </p>
                </div>
                <pre>{JSON.stringify(data.name, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
          <li>
            <ExpansionPanel
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <ExpansionPanelSummary
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={expanded === "panel5" ? "active-item" : ""}
              >
                <span className="bold">GET all with pagination</span>{" "}
                api/v1/characters?perPage=5?page=1
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="example-json">
                <pre>{JSON.stringify(data.pagination, null, 1)}</pre>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </li>
        </ul>
        <Sandbox />
      </section>
    </>
  );
};

export default Documentation;
