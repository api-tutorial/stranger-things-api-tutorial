import React from "react";
import { CodeBlock } from "../components";
import { CloudUpload } from "@material-ui/icons";

const Three = () => (
  <section>
    <h3>
      <CloudUpload /> Database
    </h3>
    <p>
      Congrats! After some hard work you have some, hopefully, pretty clean data
      to seed into a database. The following part can be intimidating if you've
      never done it before but follow the docs carefully, take your time, debug
      as you go - and don't forget to reach out for help if you need it. Try
      twitter!
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
      This is how we set up our database.
    </p>
    <h4>Schema set up</h4>
    <p>
      Your schema is how you want your data to look in your database. Basically
      it is a blueprint for MongoDB. Since all of your data is information about
      the characters of <i>Stranger Things</i> we need a Character schema. For
      each key value pair from our data, we need to specify it's type. i.e. Here
      is the character we scraped (some data left out to make it easier to
      read):
    </p>
    <CodeBlock
      code={`{
  name: 'Eleven',
  aliases: ['El'],
  otherRelations: ['Mike Wheeler'],
  affiliation: ['Hawkins National Laboratory'],
  occupation: ['Lab test subject (formerly)'],
  residence: ['Hawkins, Indiana (1971 - 1985)'],
  appearsInEpisodes: ['1'],
  photo: 'somelongurl.com',
  name: 'Eleven',
  status: 'Alive',
  born: 1971,
  gender: 'Female',
  eyeColor: 'Brown',
  hairColor: 'Brown',
  portrayedBy: 'Millie Bobby Brown'
}`}
    />
    <p>
      We need to tell Mongoose what type of data we are expecting: i.e., 'name'
      should be of type <code>String</code> and 'aliases' of type{" "}
      <code>{`[String]`}</code>; notice the square brackets around String. This
      is to specify that all aliases are arrays of strings. The default property
      for 'aliases' is for characters that do not have an 'aliases' field. This
      is an optional field. (There is also an optional 'required' field, which
      is defaulted to false but can be set true using{" "}
      <code>required: true</code>.)
    </p>
    <p>
      Here is the model for the Character schema found in{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/lib/models/Character.js">
        Character.js
      </a>
      :
    </p>
    <CodeBlock
      code={`const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: String,
  photo: String,
  status: String,
  born: String,
  aliases: {
    type: [String],
    default: ['unknown']
  },
  otherRelations: {
    type: [String],
    default: ['unknown']
  },
  affiliation: {
    type: [String],
    default: ['unknown']
  },
  occupation: {
    type: [String],
    default: ['unknown']
  },
  residence: {
    type: [String],
    default: ['unknown']
  },
  gender: String,
  eyeColor: String,
  hairColor: String,
  portrayedBy: String,
  appearsInEpisodes: {
    type: [String],
    default: ['unknown']
  },
});

module.exports = mongoose.model('Character', characterSchema);`}
    />
    <p>
      You'll notice that we've cleaned up and formatted our parsed data to match
      the same format as our mongoose database model.
    </p>
    <h4>Set up your connection</h4>
    <ol>
      <li>
        You are going to need to connect your application to your database. We
        also want to listen for on, off, and error events for our connection.
        Check out our{" "}
        <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/lib/utils/connect.js">
          connect.js
        </a>{" "}
        file in lib/utils. You will see we import and call our event listeners
        into our server.js file as{" "}
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
          then add the following to the top of your server.js file
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
      We set all of this up in it's own file,{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/seed.js">
        seed.js
      </a>
      , in the root of our application
    </p>
    <CodeBlock
      code={`seed.js

const mongoose = require('mongoose'); 

scrapeData()
  .then(chars => Character.create(chars))
  .finally(() => mongoose.connection.close()); `}
    />
    <p>
      To check out your data, use <a href="https://robomongo.org/">Robo3T</a>, a
      free open source MongoDB GUI. Check out their website for documentation on
      how to download and set this up on your machine.
    </p>
  </section>
);

export default Three;
