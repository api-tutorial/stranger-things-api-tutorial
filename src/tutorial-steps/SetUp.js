import React from "react";
import { GroupWork } from "@material-ui/icons";

const SetUp = () => (
  <section>
    <h3>
      <GroupWork /> Things to consider before scraping
    </h3>
    <ol>
      <li>
        Think about what you are scraping and how often that data changes.
      </li>
      <li>
        If you are scraping data for a streaming service (Netflix, Hulu, etc.),
        think about how often shows are added to those sites. Do you have a
        schedule for how you want to maintain your API to keep it up to date?
        How will you maintain versioning on your API?
      </li>
      <li>
        You will basically need to spelunk into the source code for the web page
        that holds the data you wish to capture.
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
        to inspect the elements in the page that contain the data you're trying
        to scrape. Does it have selectors that will be easy to target when
        trying to retreive the data? More about this is in
        <a href="#step-2"> step 2</a>.
      </li>
    </ol>
  </section>
);

export default SetUp;
