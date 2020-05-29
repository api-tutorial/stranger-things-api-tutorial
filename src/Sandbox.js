import React, { useState } from "react";

const Sandbox = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState(
    `Finish the URL /api/v1/characters... to try different queries`
  );
  const API_URL = "https://stranger-things-api.herokuapp.com/api/v1/characters";

  const fetchData = () => {
    return fetch(`${API_URL}/${userInput}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.log);
  };

  return (
    <section id="endpoint-sandbox">
      <form>
        <fieldset>
          <legend>Try out an endpoint:</legend>
          <div id="user-input">
            <label htmlFor="endpoint-input">/api/v1/characters</label>
            <input
              id="endpoint-input"
              placeholder="example: /random"
              value={userInput}
              onChange={({ target }) => setUserInput(target.value)}
              aria-label="Try out an endpoint by finishing the url /api/v1/characters"
            />
            <button id="submit-btn" onClick={() => fetchData()}>
              Try It
            </button>
          </div>
        </fieldset>
      </form>
      <aside id="endpoint-results">
        <div className="json-block">
          <pre>{JSON.stringify(data, null, 1)}</pre>
        </div>
      </aside>
    </section>
  );
};

export default Sandbox;
