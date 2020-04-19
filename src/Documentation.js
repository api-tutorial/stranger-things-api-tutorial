import React from "react";
import "./App.css";

const Documentation = () => (
  <>
    <main>
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
            GET /api/v1/characters/random?count=[Number] - get a random
            character (default 1)
          </li>
          <li>
            GET /api/v1/characters?name=[String] - get character by their name
          </li>
          <li>
            GET /api/v1/characters?[query]=[String] - get character by a
            specific query string (see options below)
          </li>
        </ul>
        <h3>Queries available</h3>
        <p>
          aliases, otherRelations, affiliation, occupation, residence,
          appearsInEpisodes, status, gender, eyeColor, born, hairColor,
          portrayedBy
        </p>
      </section>
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
    </main>
  </>
);

export default Documentation;
