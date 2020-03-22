import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>S
          <span className="flicker-fast">T</span>
          <span className="flicker-slow">R</span>
          ANGER THINGS 
          <span className="flicker-slow"> A</span>
          PI TUTOR
          <span className="flicker-fast">I</span>
          <span className="flicker-slow">AL</span>
        </h1>
      </header>
      <main>
      <section>
        <h2>Prerequisites</h2>
        <p>This project uses Node.js, Express, Superagent, MongoDB, Mongoose, and node-html-parser deployed to Heroku. This tutorial requires some familiarity with Node.js, Express, and MongoDB, but we have linked resources for you as well. Other technologies are available!</p>
      </section>
      <section>
        <h2>Getting set up</h2>
        <p>You'll need to set up a <a href="https://nodejs.org/en/docs/guides/getting-started-guide/">Node.js server</a>. We used <a href="https://expressjs.com/en/starter/hello-world.html">Express.js</a> but you can use whatever you want! We're not going to get into the details of setting up Node/Express. The docs provide great instructions and there are free tutorials available. You can also find the source code for this entire api tutorial <a href="https://github.com/api-tutorial/api-tutorial">HERE</a>.</p>
      </section>
      <section>
        <h2>Things to consider before scraping</h2>
        <ul>
          <li>Think about what you are scraping and how often that data changes.</li>
          <li>If you are scraping data for a streaming service (Netflix, Hulu, etc.), think about how often shows are added to those sites. Do you have a schedule for how you want to maintain your API to keep it up to date? How will you maintain versioning on your API?</li>
          <li>Use your browser devtools to inspect the elements in the page that contain the data you're trying to scrape. Does it have have selectors that will be easy to target when trying to retreive the data? (more about this is in<a href="#step-2"> step 2</a>.</li>
        </ul>
      </section>
      <section>
        <h2>Step 1: Time to <s>hack into</s> scape some data</h2>
        <ol>
          <li>
            <p>You will need some help with making the request and then parsing the html. There are a lot of different npm packages you can use for this. We used <a href="https://www.npmjs.com/package/superagent">super-agent</a> and <a href="https://www.npmjs.com/package/node-html-parser">node-html-parser</a></p>
            <p>run</p>
            <code>npm add -D node-html-parser superagent</code>
            <p>to install both packages as dev-dependencies.</p>
          </li>
          <li>
            <p>Now make a <code>scraper.js</code> file at the root of your repo and add a function to make the initial request.</p>
            <div className="code-block"> 
            <pre><code>{` const request = require('superagent');
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
`}</code></pre>
            </div>
            <p>Now you should be able to run <code>node scraper.js</code> and see some html data appear in your console.</p>
          </li>
        </ol>
      </section>
      <section>
        <h2>Step 2: Make a game plan</h2>
        <p>Open up your dev tools and inspect the elements that hold the data you need to scrape. In our case, the first thing we needed to do was grab each <code>h2</code> header with the class <code>pi-title</code>.</p>
        <div><img src={require('./assets/inspectView.png')} alt="screenshot showing stranger things wiki fan site with browser devtools open inspecting html elements"/></div>
        <p>We can grab a series of elements like the <code>h2</code> by using the <code>querySelectorAll</code> method on the html we get back from the parser. To do this we made a helper function. Be sure to look at the documentation for your npm parser to see what kinds of selectors are available.</p>
        <div className="code-block">
<pre><code>{`const titlesList = html => html
  .querySelectorAll('h2 .pi-title')
  .map(node => node.rawText);`}</code></pre>
      </div>
      <p>Now add your helper function <code>titlesList(html)</code> to your scraper function</p>
      <div className="code-block"> 
<pre><code>{`const scraper = () => {
  return request
    .get([your url here])
    .then(res => res.text)
    .then(parse)
    .then(titlesList)
    .then(console.log);
};`}</code></pre>
      </div>
      <p>run <code>node scraper.js</code> again</p>
      <p>At this point you should be able to see the data and start to make decisions about how to grab different elements, run some clean up functions and start to piece it all together to match your db schema.</p>
      </section>
    </main>
  </div>
  );
}

export default App;
