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
      parser. To do this we made a helper function called <code>titleList</code>{" "}
      that takes a chunk of <code>html</code> as an arguement, selects all of
      the elements that are both an <code>h2</code> and have the class{" "}
      <code>pi-title</code>, then returns the <code>rawText</code> from each
      node. Be sure to look at the documentation for your npm parser to see what
      kinds of selector methods are available.
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
      different elements. A word of warning: This can be a messy process that
      varies each time based on the type and source of the data. It can also be
      a fun process of discovery so roll up your sleeves and embrace it as a
      time of learning where you can expect both moments of frustration and
      triumphant wins along the way.
    </p>
    <p>
      Finally, once you have some workable data, you'll likely need to write and
      run some "clean up" functions in order to start to piece it all together
      to match your database schema. In our source code, you'll find these clean
      up functions in{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/scrapers/utils.js">
        scrapers/utils.js
      </a>
      . They look a little overwhelming and are hard to read but keep in mind
      that these functions were written just a little bit at a time, focusing on
      cleaning up small bits of data until slowly we ended up with something
      clean enough to put in our database. Try to keep your functions focused on
      one task at a time so that they don't become too unweildly too quickly but
      don't fret if you end up with some crazy looking code! Scrapers were never
      meant to be elegant.
    </p>
  </section>
);

export default Two;
