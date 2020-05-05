import React from "react";

const Prerequisites = () => (
  <section>
    <h3>Prerequisites &amp;&amp; Getting set up</h3>
    <p>
      You can do this project solo but everything is better with some friends
      and pair programming is really helpful when things get sticky!
    </p>
    <div className="gif">
      <iframe
        src="https://giphy.com/embed/xT9Igix0cQtPCKSvV6"
        width="480"
        height="254"
        frameBorder="0"
        className="giphy-embed"
        title="The boys from Stranger Things in their ghostbusters costumes"
        allowFullScreen
      ></iframe>
    </div>
    <p>
      This project uses Node.js, Express, Superagent, MongoDB, Mongoose, and
      node-html-parser deployed to Heroku. This tutorial requires some
      familiarity with Node.js, Express, and MongoDB. Find resource links in the
      menu. Other technologies are available!
    </p>
    <p>
      You'll need to set up a{" "}
      <a href="https://nodejs.org/en/docs/guides/getting-started-guide/">
        Node.js server
      </a>
      . We used{" "}
      <a href="https://expressjs.com/en/starter/hello-world.html">Express.js</a>{" "}
      but you can use whatever you want!
    </p>
    <div className="gif">
      <iframe
        src="https://giphy.com/embed/8P7FwgxW7FLH0LrDDZ"
        width="480"
        height="270"
        frameBorder="0"
        className="giphy-embed"
        title="The kids from Stranger Things setting up the giant antenna"
        allowFullScreen
      ></iframe>
    </div>
    <p>
      We're not going to get into the details of setting up Node/Express. The
      docs provide great instructions and there are free tutorials available.
      You can also find the source code for this entire api tutorial{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api">HERE</a>.
    </p>
  </section>
);

export default Prerequisites;
