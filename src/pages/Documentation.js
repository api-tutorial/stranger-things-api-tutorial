import React from "react";
import "../App.css";
import { Divider } from "../components";
import Sandbox from "../Sandbox";
import data from '../data/example-data.json';
import { 
  ExpansionPanel, 
  ExpansionPanelSummary, 
  ExpansionPanelDetails 
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const panelStyle = {
  background: 'black',
  color: 'white',
};

const expandIcon = <ExpandMoreIcon style={{color: 'white'}} />

const Documentation = () => (
  <>
    <section className="endpoints">
      <h3>Endpoints</h3>
      <p>stranger-things-api.herokuapp.com/</p>
      <ul>
        <li>
          <ExpansionPanel
            classes="endpoints-list"
            style={panelStyle}
          >
            <ExpansionPanelSummary
              expandIcon={expandIcon}
              aria-controls="panel1a-content"
              id="panel1a-header"
              classes="endpoints-list"
            >
              <span className="bold">GET all characters</span> /api/v1/characters
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              className="example-json"
            >
              <pre>
                {JSON.stringify(data.all, null, 1)}
              </pre>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
        <li>
            <ExpansionPanel
            classes="endpoints-list"
            style={panelStyle}
          >
            <ExpansionPanelSummary
              classes="endpoints-list"
              expandIcon={expandIcon}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className="bold">GET by ID</span> /api/v1/characters/:id
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              className="example-json"
            >
              <pre>
                {JSON.stringify(data.id, null, 1)}
              </pre>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
        <li>
          <ExpansionPanel
            style={panelStyle}
          >
            <ExpansionPanelSummary
              classes="endpoints-list"
              expandIcon={expandIcon}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className="bold">GET random character(s)</span> /api/v1/characters/random?count=1
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              className="example-json"
            >
              <pre>
                {JSON.stringify(data.random, null, 1)}
              </pre>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
        <li>

          <ExpansionPanel
            style={panelStyle}
          >
            <ExpansionPanelSummary
                classes="endpoints-list"
                expandIcon={expandIcon}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <span className="bold">GET by query</span> /api/v1/characters?name=Mike+Wheeler
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                className="example-json"
              >
                <div>
                  <h3>Available Queries</h3>
                  <p>
                    aliases, otherRelations, affiliation, occupation, residence,
                    appearsInEpisodes, status, gender, eyeColor, born, hairColor,
                    portrayedBy
                  </p>
                </div>
                <pre>
                  {JSON.stringify(data.name, null, 1)}
                </pre>
              </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
        <li>
          <ExpansionPanel
            style={panelStyle}
          >
            <ExpansionPanelSummary
              classes="endpoints-list"
              expandIcon={expandIcon}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <span className="bold">GET all with pagination</span> /api/v1/characters?perPage=5?page=1
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              className="example-json"
            >
              <pre>
                {JSON.stringify(data.pagination, null, 1)}
              </pre>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </li>
      </ul>
    </section>
    <Divider />
    <Sandbox />
  </>
);

export default Documentation;
