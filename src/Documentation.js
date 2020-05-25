import React from "react";
import "./App.css";
import Sandbox from "./Sandbox";

const Documentation = () => (
  <>
    <section>
      <h3>Endpoints</h3>
      <ul>
        <li>
          GET /api/v1/characters - get all characters (default 20 per page)
        </li>
        <li>
          GET /api/v1/characters?perPage=20?page=[Number] - edit/page through
          character list
        </li>
        <li>GET /api/v1/characters/:id - get character by their id</li>
        <li>
          GET /api/v1/characters/random?count=[Number] - get a random character
          (default 1)
        </li>
        <li>
          GET /api/v1/characters?name=[String] - get character by their name
        </li>
        <li>
          GET /api/v1/characters?[query]=[String] - get character by a specific
          query string (see options below)
        </li>
      </ul>
      <h3>Queries available</h3>
      <p>
        aliases, otherRelations, affiliation, occupation, residence,
        appearsInEpisodes, status, gender, eyeColor, born, hairColor,
        portrayedBy
      </p>
    </section>
    <Sandbox />
  </>
);

export default Documentation;
