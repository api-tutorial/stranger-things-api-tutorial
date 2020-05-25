import React from "react";
import { CodeBlock } from "../components";
import { CheckCircleOutline } from "@material-ui/icons";

const One = () => (
  <section>
    <h3>
      <CheckCircleOutline /> Set up your scraper
    </h3>
    <p>
      You will need some help with making the request and then parsing the html.
      There are a lot of different npm packages you can use for this. We used{" "}
      <a href="https://www.npmjs.com/package/superagent">super-agent</a> and{" "}
      <a href="https://www.npmjs.com/package/node-html-parser">
        node-html-parser.
      </a>
      <br />
      run
      <br />
      <code>npm add -D node-html-parser superagent</code>
      <br />
      to install both packages as dev-dependencies
    </p>
    <p>
      Now make a <code>scraper.js</code> file at the root of your repo and add a
      function to make the initial request.
    </p>
    <CodeBlock
      code={`const request = require('superagent');
const { parse } = require('node-html-parser');

const scraper = () => {
  return request
    .get([your url here])
    .then(res => res.text)
    .then(parse)
    .then(console.log);
};

scraper();

module.exports = { scraper };
`}
    />
    <p>
      Now you should be able to run <code>node scraper.js</code> and see some
      html data appear in your console.
    </p>
  </section>
);

export default One;
