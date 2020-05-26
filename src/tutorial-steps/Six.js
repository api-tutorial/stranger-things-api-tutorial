import React from "react";
import { PostAdd } from "@material-ui/icons";

const Six = () => (
  <section>
    <h3>
      <PostAdd /> Document
    </h3>
    <p>
      Take the time to document your application in a README.md. If you're also
      learning front end developement, use this as an opportunity to build a
      static site like this one to display your documentation.
    </p>
    <p>
      What should you include? Explain in plain english each route/endpoint, how
      to use it, and what data your users can expect to get back. Consider what
      kind of information you would need to know if you were using your API for
      the first time. Check out our approach to this on our{" "}
      <a href="/docs">docs</a> page.
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
);

export default Six;
