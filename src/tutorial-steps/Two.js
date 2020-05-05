import React from "react";
import { CodeBlock } from "../components";
import { Code } from "@material-ui/icons";

const Two = () => (
  <section>
    <h3>
      <Code /> Time to {` `}
      <s>hack into</s>
      {` `}scape some data
    </h3>
    <p>
      Open up your dev tools and inspect the elements that hold the data you
      need to scrape. In our case, the first thing we needed to do was grab each{" "}
      <code>h2</code> header with the class <code>pi-title</code> in order to
      get the character name (e.g. Jim Hopper).
    </p>
    <div>
      <img
        src={require("../assets/inspectView.png")}
        alt="screenshot showing stranger things wiki fan site with browser devtools open inspecting html elements"
      />
    </div>
    <p>
      We can grab a series of elements like the <code>h2</code> by using the{" "}
      <code>querySelectorAll</code> method on the html we get back from the
      parser. To do this we made a helper function that takes the html as a
      parameter, selects all of the elements that are both h2s and have the
      class <code>pi-title</code>, then returns the <code>rawText</code> from
      each node. Be sure to look at the documentation for your npm parser to see
      what kinds of selector methods are available.
    </p>
    <CodeBlock
      code={`const titlesList = html => {
  return html
    .querySelectorAll('h2 .pi-title')
    .map(node => node.rawText);
}`}
    />
    <p>
      Now add your helper function <code>titlesList(html)</code> to your scraper
      function
    </p>
    <CodeBlock
      code={`const scraper = () => {
  return request
    .get([your url here])
    .then(res => res.text)
    .then(parse)
    .then(titlesList)
    .then(console.log);
};`}
    />
    <p>
      run
      <br />
      <code>node scraper.js</code>
    </p>
    <p>At this point you should be able to see some data!</p>
    <div className="gif">
      <iframe
        src="https://giphy.com/embed/l1J9xs1aypJXKZxcY"
        width="480"
        height="270"
        title="Phyllis gasping as her christmas lights flash"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
    <p>
      This data will help guide you in making decisions about how to grab
      different elements.This can be a messy process so roll up your sleeves and
      setting in. You'll likely want to write and run some "clean up" functions
      in order to start to piece it all together to match your db schema.
    </p>
  </section>
);

export default Two;
