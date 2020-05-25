import React from "react";
import { CodeBlock } from "../components";
import { CompareArrows } from "@material-ui/icons";

const Four = () => (
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
      This is a summary of the functionality of each of our routes/endpoints. If
      you haven't used Express before, there are a lot of resources out there
      including the docs (link above). For a complete look, check out our source
      code in the{" "}
      <a href="https://github.com/api-tutorial/stranger-things-api/blob/master/lib/routes/characters.js">
        routes file
      </a>
      .
      <br />
      <br />
      Each route takes a request (as "req") and returns a response (as "res").
      <br />
      <br />
      When you send a request to an endpoint it is recieved as an object and one
      of the properties on that object is the "query" which can equal whatever
      you want it to such as a count to get a certain number of characters or a
      character name. Check out our <a href="/docs">documentation</a> page to
      try out using queries!
    </p>
    <h4>Hot Tip</h4>
    <p>
      We recommend thinking from your user's point of view when deciding what
      routes to build. What data would your users want? If you have{" "}
      <em>a lot</em> of data, consider pagination as an option. Try bouncing off
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
    <h4>GET a random character(s)</h4>
    <p>Our GET route looks very similar here...</p>
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
      method returns a random entry aka a random character from the database
      using the aggregation shown in the method. You can create your own static
      methods in your model schema. Check out the{" "}
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
    <h4>GET characters + pagination + queries</h4>
    <p>
      For our GET all characters endpoint, we repurposed it to handle multiple
      functionalities including pagination and all queries. Check out the source
      code:
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
);

export default Four;
