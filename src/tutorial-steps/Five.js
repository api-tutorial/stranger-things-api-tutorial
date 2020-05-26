import React from "react";
import { LaptopMac } from "@material-ui/icons";

const Five = () => (
  <section>
    <h3>
      <LaptopMac /> Deploy!
    </h3>
    <p>
      That's it, you did it! You scraped your own data, cleaned it up pretty
      good, seeded a database, and set up various endpoints for fetching said
      data.
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
    <p>
      All that's left is to deploy so that other devs can <em>USE</em> your API
      in their own projects!
    </p>
    <p>
      We deployed to Heroku. Heroku has their own mLab noSQL database that is
      similar to MongoDB. They have documentation that will walk you through
      deployment step-by-step. You can use git or use their online GUI. Here are
      some resources to help in this process:
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
);

export default Five;
