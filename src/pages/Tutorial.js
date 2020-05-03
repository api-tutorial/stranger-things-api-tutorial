import React from "react";
import { Divider, CodeBlock } from "../components";
import {
  GroupWork,
  CheckCircleOutline,
  Code,
  CompareArrows,
  CloudUpload,
  LaptopMac,
  PostAdd,
} from "@material-ui/icons";
import "../App.css";

const Tutorial = () => (
  <>
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
        <p>
          <a href="https://giphy.com/gifs/netflix-season-2-stranger-things-xT9Igix0cQtPCKSvV6">
            via GIPHY
          </a>
        </p>
      </div>
      <p>
        This project uses Node.js, Express, Superagent, MongoDB, Mongoose, and
        node-html-parser deployed to Heroku. This tutorial requires some
        familiarity with Node.js, Express, and MongoDB, but we have linked
        resources for you as well. Other technologies are available!
      </p>
      <p>
        You'll need to set up a{" "}
        <a href="https://nodejs.org/en/docs/guides/getting-started-guide/">
          Node.js server
        </a>
        . We used{" "}
        <a href="https://expressjs.com/en/starter/hello-world.html">
          Express.js
        </a>{" "}
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
    <Divider id="set-up" flickerSpeed="slow" />
    <section>
      <h3>
        <GroupWork /> Things to consider before scraping
      </h3>
      <ol>
        <li>
          Think about what you are scraping and how often that data changes.
        </li>
        <li>
          If you are scraping data for a streaming service (Netflix, Hulu,
          etc.), think about how often shows are added to those sites. Do you
          have a schedule for how you want to maintain your API to keep it up to
          date? How will you maintain versioning on your API?
        </li>
        <li>
          You will basically need to spelunk into the source code for the web
          page that holds the data you wish to capture.
          <br />
          <div className="gif">
            <iframe
              src="https://giphy.com/embed/xTcf1av1seQTcwyS88"
              width="480"
              height="239"
              frameBorder="0"
              className="giphy-embed"
              title="Hopper walking through the dark upside down tunnel with a flashlight"
              allowFullScreen
            ></iframe>
          </div>
          Use your browser devtools (<kbd>⌘</kbd> <kbd>shift</kbd> <kbd>c</kbd>){" "}
          to inspect the elements in the page that contain the data you're
          trying to scrape. Does it have selectors that will be easy to target
          when trying to retreive the data? (more about this is in
          <a href="#step-2"> step 2</a>.
        </li>
      </ol>
    </section>
    <Divider id="step-1" />
    <section>
      <h3>
        <CheckCircleOutline /> Set up your scraper
      </h3>
      <p>
        You will need some help with making the request and then parsing the
        html. There are a lot of different npm packages you can use for this. We
        used <a href="https://www.npmjs.com/package/superagent">super-agent</a>{" "}
        and{" "}
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
        Now make a <code>scraper.js</code> file at the root of your repo and add
        a function to make the initial request.
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
    <Divider id="step-2" flickerSpeed="fast" />
    <section>
      <h3>
        <Code /> Time to {` `}
        <s>hack into</s>
        {` `}scape some data
      </h3>
      <p>
        Open up your dev tools and inspect the elements that hold the data you
        need to scrape. In our case, the first thing we needed to do was grab
        each <code>h3</code> header with the class <code>pi-title</code>.
      </p>
      <div>
        <img
          src={require("../assets/inspectView.png")}
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
      <CodeBlock
        code={`const titlesList = html => {
  return html
    .querySelectorAll('h3 .pi-title')
    .map(node => node.rawText);
}`}
      />
      <p>
        Now add your helper function <code>titlesList(html)</code> to your
        scraper function
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
        different elements.This can be a messy process so roll up your sleeves
        and setting in. You'll likely want to write and run some "clean up"
        functions in order to start to piece it all together to match your db
        schema.
      </p>
    </section>
    <Divider id="step-3" flickerSpeed="slow" />
    <section>
      <h3>
        <CloudUpload /> Database
      </h3>
      <p>
        Congrats! After some hard work you have some, hopefully, pretty clean
        data to seed into a database. This part can be intimdating if you've
        never done it before but follow the docs carefully, take your time,
        debug as you go - and don't forget to reach out for help if you need it.
        Try twitter!
      </p>
      <div className="gif">
        <iframe
          src="https://giphy.com/embed/3o7qj3mwYZaGck0NoI"
          width="480"
          height="239"
          frameBorder="0"
          className="giphy-embed"
          title="The demogorgon from Stranger Things"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        We are using{" "}
        <a href="https://docs.mongodb.com/manual/tutorial/getting-started/">
          MongoDB
        </a>{" "}
        with <a href="https://mongoosejs.com/docs/index.html">Mongoose ODM</a>{" "}
        (object data modeling). The Mongoose documentation is top notch, whereas
        the MongoDB docs could use some work.{" "}
        <em>You will need MongoDB set up on your computer to follow along.</em>{" "}
        This is how we set up our database
      </p>
      <h4>Set up your schema</h4>
      <p>
        Your schema is how you want your data to look in your database.
        Basically it is a blueprint for MongoDB. Since all of your data is
        information about the characters of <i>Stranger Things</i> we need a
        Character schema. For each key value pair from our data, we need to
        specify it's type. i.e. Here is the character we scraped:
      </p>
      <CodeBlock code={`{ name: 'Eleven' }`} />
      <p>
        So we need to tell Mongoose that we are expecting all character's names
        to be a <code>String</code>
      </p>
      <p>Here is a short snippet from Character.js:</p>
      <CodeBlock
        code={`const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  aliases: {
    type: [String],
    default: ['unknown']
  },
});

module.exports = mongoose.model('Character', characterSchema);`}
      />
      <p>
        You'll notice that 'aliases' has a type <code>{`[String]`}</code>; this
        is to specify that all aliases are arrays of strings. The default value
        is for characters that do not have an 'aliases' field. This is an
        optional field. (There is also an optional 'required' field, which is
        defaulted to false.)
      </p>
      <h4>Set up your connection</h4>
      <ol>
        <li>
          You are going to need to connect your application to your database. We
          also want to listen for on, off, and error events for our connection.
          Check out our connect.js file. You will see we import and call our
          event listeners into our server.js file as{" "}
          <pre>
            <code>{`require('lib/utils/connect.js')();`}</code>
          </pre>
        </li>
        <li>
          <p>
            Your local db name should remain private to you. Set up an .env file
            and store your <code>MONGODB_URI=</code> link there. See our
            .env.example file in the root of our project.{" "}
            <i>Don't forget to add .env to your .gitignore file!</i>
            <br />
            To access your environment variables, you need to run
            <br />
            <code>{`npm i dotenv`}</code>
            <br />
            and add this to the top of your server.js file
            <br />
            <code>{`require('dotenv').config();`}</code>
          </p>
        </li>
        <li>
          Try running your server. Remember, first you will need to run{" "}
          <code>gomongo</code>. Then run your server.js file. You should be able
          to see the following log:
          <CodeBlock
            code={`listening on PORT [PROCESS.ENV_PORT]
Connection open on mongodb: [PROCESS.ENV_MONGODB_URI]`}
          />
        </li>
      </ol>
      <h4>Seed your database</h4>
      <p>
        In order to seed your database, you will need access to your MONGODB_URI
      </p>
      <CodeBlock
        code={`require('dotenv').config(); 
require('./lib/utils/connect')(); 
const scrapeData = require('./scrapers/infoScraper'); 
const Character = require('./lib/Models/Character');`}
      />
      <p>
        We set all of this up in it's own file in the root of our application
      </p>
      <CodeBlock
        code={`seed.js

const mongoose = require('mongoose'); 

scrapeData()
  .then(chars => Character.create(chars))
  .finally(() => mongoose.connection.close()); `}
      />
      <p>
        To check out your data, use <a href="https://robomongo.org/">Robo3T</a>,
        a free open source MongoDB GUI. Check out their website for
        documentation on how to download and set this up on your machine.
      </p>
    </section>
    <Divider id="step-4" flickerSpeed="slow" />
    <section>
      <h3>
        <CompareArrows /> Routes
      </h3>
      <p>
        This section requires some familiarity with{" "}
        <a href="http://expressjs.com/en/5x/api.html#router">Express Router</a>
        .
        <br />
        <br />
        This is a summary of the functionality of each of our routes/endpoints.
        If you haven't used Express before, there are a lot of resources out
        there including the docs (link above). For a complete look, check out
        our source code in the{" "}
        <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/lib/routes/characters.js">
          routes file
        </a>
        .
        <br />
        <br />
        Each route takes a request (as "req") and returns a response (as "res").
        <br />
        <br />
        When you send a request to an endpoint it is recieved as an object and
        one the of properties on that object can be the "query" which can equal
        whatever you want it to such as a count to get a certain number of
        characters or a character name. Check out our{" "}
        <a href="/docs">documentation</a> page to try out using queries!
      </p>
      <h4>Hot Tip</h4>
      <p>
        We recommend thinking from your user's point of view when deciding what
        routes to build. What data would your users want? If you have{" "}
        <i>a lot</i> of data, consider pagination as an option. Try bouncing off
        ideas with other devs to come up with solutions.
      </p>
      <div className="gif">
        <iframe
          src="https://giphy.com/embed/3ohhwBauNNmMDaX984"
          width="480"
          height="238"
          frameBorder="0"
          className="giphy-embed"
          title="Eleven stocking up on freezer waffles"
          allowFullScreen
        ></iframe>
      </div>
      <h4>Get a character by id</h4>
      <CodeBlock
        code={`.get('/:id', (req, res, next) => {
  Character
    .findById(req.params.id)
    .select('-__v')
    .then(character => res.send(character))
    .catch(next);
  })`}
      />
      <h4>Get a random character(s)</h4>
      <p>Our get route looks very similar here...</p>
      <CodeBlock
        code={`.get('/random', (req, res, next) => {
  const { count = 1 } = req.query;
  Character
    .getRandom(+count)
    .then(character => res.send(character))
    .catch(next);
})`}
      />
      <p>
        You'll notice a custom static method called 'getRandom' being used. This
        method returns a randome entry aka a random character from the database
        using the aggregation shown in the method. You can create your own
        static methods in your model schema. Check out the{" "}
        <a href="https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html">
          docs
        </a>{" "}
        to learn more.
      </p>
      <CodeBlock
        code={`characterSchema.statics.getRandom = function(count) {
  return this.aggregate([
    { $sample: { size: count }
    }, {$project: { __v: false} }
  ]);
};`}
      />
      <h4>Get characters + pagination + queries</h4>
      <p>
        For our get all characters endpoint, we repurposed it to handle multiple
        functionalities including pagination and all queries. Check out the
        source code:
      </p>
      <CodeBlock
        code={`.get('/', (req, res, next) => {
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
});`}
      />
    </section>
    <Divider id="step-5" />
    <section>
      <h3>
        <LaptopMac /> Deploy!
      </h3>
      <p>
        That's it, you did it! You scraped your own data, cleaned it up pretty
        good, seeded your database and set up a router so users can retreive
        that data using various endpoints.
      </p>
      <div className="gif">
        <iframe
          src="https://giphy.com/embed/3o7aCVqXn0idWFuDnO"
          width="480"
          height="254"
          frameBorder="0"
          className="giphy-embed"
          title="Steve and Nancy from Stranger Things dancing and celebrating"
          allowFullScreen
        ></iframe>
      </div>
      <p>All that's left is to deploy so that other's can USE your API.</p>
      <p>
        We deployed to Heroku. Heroku has their own mLab noSQL database that is
        similar to MongoDB. They have documentation that will walk you through
        deployment step-by-step. You can use git or use their online GUI. Here
        are some resources to help in this process:
      </p>
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
    <Divider id="step-6" />
    <section>
      <h3>
        <PostAdd /> Document
      </h3>
      <p>
        Take the time to document your application in a README.md. If you're
        also learning front end developement, use this as an opportunity to
        build a static site like this one to display your documentation. What
        should you include? Explain in plain english each route/endpoint, how to
        call it, and what data you users can expect to get back. Consider what
        kind of information you would need to know if you were using your own
        API for the first time.
      </p>
      <div className="gif">
        <iframe
          src="https://giphy.com/embed/3o7qiQWUiyYlRx3fBS"
          width="480"
          height="239"
          frameBorder="0"
          className="giphy-embed"
          title="Mike Wheeler scribbling on paper"
          allowFullScreen
        ></iframe>
      </div>
    </section>
    <h4>
      Share your APIs with us on Twitter!{" "}
      <a href="https://twitter.com/katerj">@katerj</a> and{" "}
      <a href="https://twitter.com/paigeegorry">@paigeegorry</a>
    </h4>
  </>
);

export default Tutorial;
