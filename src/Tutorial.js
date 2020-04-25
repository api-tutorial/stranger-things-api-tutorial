import React from "react";
import "./App.css";

const Tutorial = () => (
  <>
    <header>
      {/* <nav>
        <ul>
          <li>
            <a href="#set-up">Dependencies</a>
          </li>
          <li>
            <a href="#step-1">Set up</a>
          </li>
          <li>
            <a href="#step-2">Scrape Data</a>
          </li>
          <li>
            <a href="#step-3">Database</a>
          </li>
          <li>
            <a href="#step-4">Routes</a>
          </li>
          <li>
            <a href="#step-5">Deploy!</a>
          </li>
          <li>
            <a href="#step-6">Documentation</a>
          </li>
        </ul>
      </nav> */}
    </header>
    <main>
      <section>
        <h3>Prerequisites</h3>
        <p>
          This project uses Node.js, Express, Superagent, MongoDB, Mongoose, and
          node-html-parser deployed to Heroku. This tutorial requires some
          familiarity with Node.js, Express, and MongoDB, but we have linked
          resources for you as well. Other technologies are available!
        </p>
      </section>
      <div id="set-up" className="neon-divider"></div>
      <section>
        <h3>Getting set up</h3>
        <p>
          You'll need to set up a{" "}
          <a href="https://nodejs.org/en/docs/guides/getting-started-guide/">
            Node.js server
          </a>
          . We used{" "}
          <a href="https://expressjs.com/en/starter/hello-world.html">
            Express.js
          </a>{" "}
          but you can use whatever you want! We're not going to get into the
          details of setting up Node/Express. The docs provide great
          instructions and there are free tutorials available. You can also find
          the source code for this entire api tutorial{" "}
          <a href="https://github.com/api-tutorial/api-tutorial">HERE</a>.
        </p>
      </section>
      <div className="neon-divider flicker-slow"></div>
      <section>
        <h3>Things to consider before scraping</h3>
        <ul>
          <li>
            Think about what you are scraping and how often that data changes.
          </li>
          <li>
            If you are scraping data for a streaming service (Netflix, Hulu,
            etc.), think about how often shows are added to those sites. Do you
            have a schedule for how you want to maintain your API to keep it up
            to date? How will you maintain versioning on your API?
          </li>
          <li>
            Use your browser devtools to inspect the elements in the page that
            contain the data you're trying to scrape. Does it have selectors
            that will be easy to target when trying to retreive the data? (more
            about this is in<a href="#step-2"> step 2</a>.
          </li>
        </ul>
      </section>
      <div id="step-1" className="neon-divider"></div>
      <section>
        <h3>Step 1: Set up your scraper</h3>
        <p>
          You will need some help with making the request and then parsing the
          html. There are a lot of different npm packages you can use for this.
          We used{" "}
          <a href="https://www.npmjs.com/package/superagent">super-agent</a> and{" "}
          <a href="https://www.npmjs.com/package/node-html-parser">
            node-html-parser.
          </a>
          <br />
          run
          <br />
          <code>npm add -D node-html-parser superagent</code>
          <br />
          to install both packages as dev-dependencies.
        </p>
        <p>
          Now make a <code>scraper.js</code> file at the root of your repo and
          add a function to make the initial request.
        </p>
        <div className="code-block">
          <pre>
            <code>{` const request = require('superagent');
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
`}</code>
          </pre>
        </div>
        <p>
          Now you should be able to run <code>node scraper.js</code> and see
          some html data appear in your console.
        </p>
      </section>
      <div id="step-2" className="neon-divider"></div>
      <section>
        <h3>
          Step 2: Time to <s>hack into</s> scape some data
        </h3>
        <p>
          Open up your dev tools and inspect the elements that hold the data you
          need to scrape. In our case, the first thing we needed to do was grab
          each <code>h3</code> header with the class <code>pi-title</code>.
        </p>
        <div>
          <img
            src={require("./assets/inspectView.png")}
            alt="screenshot showing stranger things wiki fan site with browser devtools open inspecting html elements"
          />
        </div>
        <p>
          We can grab a series of elements like the <code>h3</code> by using the{" "}
          <code>querySelectorAll</code> method on the html we get back from the
          parser. To do this we made a helper function. Be sure to look at the
          documentation for your npm parser to see what kinds of selectors are
          available.
        </p>
        <div className="code-block">
          <pre>
            <code>{`const titlesList = html => html
  .querySelectorAll('h3 .pi-title')
  .map(node => node.rawText);`}</code>
          </pre>
        </div>
        <p>
          Now add your helper function <code>titlesList(html)</code> to your
          scraper function
        </p>
        <div className="code-block">
          <pre>
            <code>{`const scraper = () => {
  return request
  .get([your url here])
  .then(res => res.text)
  .then(parse)
  .then(titlesList)
  .then(console.log);
};`}</code>
          </pre>
        </div>
        <p>
          run <code>node scraper.js</code> again
        </p>
        <p>
          At this point you should be able to see the data and start to make
          decisions about how to grab different elements, run some clean up
          functions and start to piece it all together to match your db schema.
        </p>
      </section>
      <div id="step-3" className="neon-divider flicker-slow"></div>
      <section>
        <h3>Step 3: Database</h3>
        <p>
          We are using{" "}
          <a href="https://docs.mongodb.com/manual/tutorial/getting-started/">
            MongoDB
          </a>{" "}
          with <a href="https://mongoosejs.com/docs/index.html">Mongoose ODM</a>{" "}
          (object data modeling). The Mongoose documentation is top notch,
          whereas the MongoDB docs could use some work. Please reference their
          documentation for more information.{" "}
          <em>
            You will need MongoDB set up on your computer to follow along.
          </em>{" "}
          This is how we set up our database
        </p>
        <h4>a. Set up your schema</h4>
        <p>
          Your schema is how you want your data to look in your database.
          Basically it is a blueprint for MongoDB. Since all of your data is
          information about the characters of <i>Stranger Things</i> we need a
          character schema. For each key value pair from our data, we need to
          specify it's type. i.e. Here is the character we scraped:
        </p>
        <div className="code-block">
          <pre>
            <code>{`{
  name: 'Eleven'
}`}</code>
          </pre>
        </div>
        <p>
          So we need to tell Mongoose that we are expecting all character's
          names to be a <code>String</code>
        </p>
        <p>Here is a short snippet from Character.js:</p>
        <div className="code-block">
          <pre>
            <code>{`
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  aliases: {
    type: [String],
    default: ['unknown']
  },
});

module.exports = mongoose.model('Character', characterSchema);`}</code>
          </pre>
        </div>
        <p>
          You'll notice that 'aliases' has a type <code>{`[String]`}</code>;
          this is to specify that all aliases are arrays of strings.
          <br />
          The default value is for characters that do not have an 'aliases'
          field. This is an optional field. (There is also an optional
          'required' field, which is defaulted to false.)
        </p>
        <h4>b. Set up your connection</h4>
        <ol>
          <li>
            You are going to need to connect your application to your database.
            We also want to listen for on, off, and error events for our
            connection. Check out our connect.js file. You will see we import
            and call our event listeners into our server.js file as{" "}
            <pre>
              <code>{`require('lib/utils/connect.js')();`}</code>
            </pre>
          </li>
          <li>
            Your local db name should remain private to you. Set up an .env file
            and store your <code>MONGODB_URI=</code> link there. See our
            .env.example file in the root of our project.{" "}
            <i>Don't forget to add .env to your .gitignore file!</i>
            <p>To access your environment variables, you need to run</p>
            <code>{`npm i dotenv`}</code>
            <p>
              and add this to the top of your server.js file{" "}
              <code>{`require('dotenv').config();`}</code>
            </p>
          </li>
          <li>
            Try running your server. Remember, first you will need to run{" "}
            <code>gomongo</code>. Then run your server.js file. You should be
            able to see the following log:
            <div className="code-block">
              <pre>
                <code>{`listening on PORT [PROCESS.ENV_PORT]
    Connection open on mongodb: [PROCESS.ENV_MONGODB_URI]`}</code>
              </pre>
            </div>
          </li>
        </ol>
        <h4>c. Seed your database</h4>
        <p>In order to seed your database, you will need:</p>
        <div className="code-block">
          <pre>
            <code>{`// access to your MONGODB_URI
require('dotenv').config(); 

// connection to your db
require('./lib/utils/connect')(); 

// your scraper function
const scrapeData = require('./scrapers/infoScraper'); 

// your mongoose schema
const Character = require('./lib/Models/Character');`}</code>
          </pre>
        </div>
        <p>
          We set all of this up in it's own file in the root of our application
        </p>
        <div className="code-block">
          <pre>
            <code>{`// ./seed.js

// don't forget to close the connection when finished!
const mongoose = require('mongoose'); 

scrapeData()
.then(chars => Character.create(chars))
.finally(() => mongoose.connection.close()); `}</code>
          </pre>
        </div>
        <p>
          To check out your data, use{" "}
          <a href="https://robomongo.org/">Robo3T</a>, a free open source
          MongoDB GUI. Check out their website for documentation on how to
          download and set this up on your machine.
        </p>
      </section>
      <div id="step-4" className="neon-divider"></div>
      <section>
        <h3>Step 4: Routes</h3>
        <p>
          This section requires some familiarity with{" "}
          <a href="http://expressjs.com/en/5x/api.html#router">
            Express Router
          </a>
          .<br />
          This section will just be a summary of the functionality of each of
          our routes.
        </p>
        <h4>Hot Tip</h4>
        <p>
          We recommend thinking of your users and data. What data would your
          users want? If you have <i>a lot</i> of data, consider pagination as
          an option. Try and bounce off ideas with other devs to come up with
          your routes.
        </p>
        <h4>a. Get a character by id</h4>
        <div className="code-block">
          <pre>
            <code>{`.get('/:id', (req, res, next) => {
  Character
  .findById(req.params.id)
  .select('-__v')
  .then(character => res.send(character))
  .catch(next);
})`}</code>
          </pre>
        </div>
        <h4>b. Get a random character(s)</h4>
        <p>Our get route looks very similar here...</p>
        <div className="code-block">
          <pre>
            <code>{`.get('/random', (req, res, next) => {
    const { count = 1 } = req.query;
    Character
    .getRandom(+count)
    .then(character => res.send(character))
    .catch(next);
  })`}</code>
          </pre>
        </div>
        <p>
          You'll notice a custom static called 'getRandom' being used. You can
          create your own static method in your model schema. Check out the{" "}
          <a href="https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html">
            docs
          </a>{" "}
          to learn more.
        </p>
        <div className="code-block">
          <pre>
            <code>{`characterSchema.statics.getRandom = function(count) {
    return this.aggregate([{ $sample: { size: count }}, {$project: { __v: false}}]);
  };`}</code>
          </pre>
        </div>
        <h4>c. Get characters + pagination + queries</h4>
        <p>
          For our get all characters route, we repurposed it to handle multiple
          functionalities including pagination and all queries. Check out the
          source code:
        </p>
        <div className="code-block">
          <pre>
            <code>{`.get('/', (req, res, next) => {
    const { page = 1, perPage = 20, ...search } = req.query;
    
    const query = Object.entries(search)
    .reduce((query, [key, value]) => {
      query[key] = new RegExp(value, 'gmi');
      return query;
    }, {});
    
    Character
    .find(query)
    .skip(+perPage * (+page - 1))
    .limit(+perPage)
    .lean()
    .select('-__v')
    .then(characters => res.send(characters))
    .catch(next);
  });`}</code>
          </pre>
        </div>
      </section>
      <div id="step-5" className="neon-divider"></div>
      <section>
        <h3>Step 5: Deploy!</h3>
        <p>We decided to deploy to Heroku! Here are some resources:</p>
        <ul>
          <li>
            <a href="https://devcenter.heroku.com/articles/deploying-nodejs">
              Deploying NodeJS App
            </a>
          </li>
          <li>
            <a href="https://devcenter.heroku.com/articles/git">
              Deploying with Git
            </a>
          </li>
          <li>
            <a href="https://devcenter.heroku.com/articles/mongolab">
              mLab noSQL DB set-up
            </a>
          </li>
        </ul>
      </section>
      <div id="step-6" className="neon-divider"></div>
      <section>
        <h3>Step 6: Document</h3>
        <p>
          Take the time to document your application either in a README or
          create a front end! Provide information on your routes and what type
          of data users will be accessing.
        </p>
        <h4>
          Share your APIs with us on Twitter!{" "}
          <a href="https://twitter.com/katerj">@katerj</a> and{" "}
          <a href="https://twitter.com/paigeegorry">@paigeegorry</a>
        </h4>
      </section>
    </main>
  </>
);

export default Tutorial;
