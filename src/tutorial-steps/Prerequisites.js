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
      This project uses Node.js, Express, Superagent, MongoDB, Mongoose,
      node-html-parser and is deployed to fly.io. This tutorial requires some
      familiarity with these libraries/NPM packages. For more information, find
      resource links in the menu. Other technologies are available so if you are
      more familiar with an alternative please feel free to use that instead!
    </p>
    <p>
      First, you'll need to set up a{" "}
      <a href="https://nodejs.org/en/docs/guides/getting-started-guide/">
        Node.js server
      </a>{" "}
      using{" "}
      <a href="https://expressjs.com/en/starter/hello-world.html">Express.js</a>
      .
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
      The <a href="https://expressjs.com/en/starter/hello-world.html">docs</a>{" "}
      provide great instructions and there are free tutorials available with a
      quick google search. You can also find the source code for this entire api
      tutorial{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api">HERE</a>.
      Specifically check out{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/server.js">
        server.js
      </a>{" "}
      and{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/lib/app.js">
        lib/app.js
      </a>{" "}
      to see our implementation.
    </p>
    <p>
      Questions? Share your questions about anything related to this tutorial
      with us on twitter and include{" "}
      <a href="https://twitter.com/hashtag/APITutorial?src=hashtag_click">
        #APITutorial
      </a>
      !
    </p>
    <div className="twitter-handles">
      <a className="twitter-img" href="https://twitter.com/katerj">
        <img
          alt="Kate as a cartoon drawing of her head on a marmot body with a stocking hat and a cup of tea in her twitter avatar"
          src="https://pbs.twimg.com/profile_images/1195956725142081536/JkJPNolD_400x400.jpg"
        />
        @katerj
      </a>
      <a className="twitter-img" href="https://twitter.com/paigeegorry">
        <img
          alt="Paige looking over the top of her coffee cup in her twitter avatar"
          src="https://pbs.twimg.com/profile_images/1147007236796870656/NRyOomC-_400x400.jpg"
        />
        @paigeegorry
      </a>
    </div>
  </section>
);

export default Prerequisites;
