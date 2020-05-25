import React, { useState } from 'react';

const Sandbox = () => {
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState(null);
  const API_URL = 'https://stranger-things-api.herokuapp.com/api/v1/characters'

  const fetchData = () => {
    return fetch(`${API_URL}/${userInput}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.log);
  }

  return (
    <section id="endpoint-sandbox">
      <div>
        <label htmlFor="endpoint">Try out an endpoint:</label>
        <p>
        /api/v1/characters
        <input value={userInput} onChange={({target}) => setUserInput(target.value)}/>
        </p>
        <h4><button onClick={() => fetchData()}>Submit</button></h4>
      </div>
      <aside id="endpoint-results">
        <div className="json-block"><pre>{JSON.stringify(data, null, 1)}</pre></div>
      </aside>
    </section>
  )
}

export default Sandbox;
