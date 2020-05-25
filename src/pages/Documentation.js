import React from "react";
import { Divider } from "../components";
// import FileCopyIcon from "@material-ui/icons/FileCopy";
import "../App.css";

const Documentation = () => (
  <>
    <section className="endpoints">
      <h3>Endpoints</h3>
      <p>stranger-things-api.herokuapp.com/</p>
      <ul className="endpoints-list">
        <li>
          <span className="bold">GET all characters</span>{" "}
          <p>api/v1/characters</p> {/* <FileCopyIcon /> */}
        </li>
        <li>
          <span className="bold">GET by ID</span> <p>api/v1/characters/:id</p>
        </li>
        <li>
          <span className="bold">GET by count</span>{" "}
          <p>api/v1/characters/random?count=1</p>
        </li>
        <li>
          <span className="bold">GET by name</span>{" "}
          <p>api/v1/characters?name=eleven</p>
        </li>
        <li>
          <span className="bold">GET by query</span>{" "}
          <p>api/v1/characters?hairColor=brown</p>
        </li>
        <li>
          <span className="bold">GET all with pagination</span>{" "}
          <p>api/v1/characters?perPage=20?page=1</p>
        </li>
      </ul>
      <h3>Queries</h3>
      <p>
        aliases, otherRelations, affiliation, occupation, residence,
        appearsInEpisodes, status, gender, eyeColor, born, hairColor,
        portrayedBy
      </p>
    </section>
    <Divider />
    <section id="endpoint-sandbox">
      <div>
        <label htmlFor="endpoint">Try out an endpoint: </label>
        <input id="endpoint" type="text" />
      </div>
      <aside id="endpoint-results">
        <h4>Data returned</h4>
        <div className="json-block"></div>
      </aside>
    </section>
  </>
);

export default Documentation;
