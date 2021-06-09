import React from 'react';

export const Introduction = () => {
  return (
    <section>
      <h3>Introduction</h3>
      <p>
        So what is this all about? I'm sure you have a lot of questions. The big picture here is that this is a step-by-step tutorial on how to build your own API using web scraping.
        Let's see if we can answer a few more questions you may have.
      </p>

      <ul>
        <li>
          But what even <i>is</i> an API?<br /><br />
          API stands for Application Programming Interface. Does that mean anything? That's okay if it doesn't! 
          Check out this beginner-friendly article from 
          <a href="https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/" alt="What is an API? - FreeCodeCamp">FreeCodeCamp</a>. 
        </li>
        <br />
        <li>
          Why build your own API? <br /><br />
          Yes it's true there are 1000s of free APIs at your disposal all around the web! For us, we weren't finding 
          APIs of the shows and media we liked, so we built our own! It's awesome to contribute to the tech world 
          with something else you know and love.
        </li>
        <br />
        <li>
          What is web scraping and why should I use it?<br /><br />
          For a basic overview of what web scraping is, check out this article from  
          <a href="https://www.geeksforgeeks.org/what-is-web-scraping-and-how-to-use-it/" alt="What is Web Scraping?">GeeksForGeeks</a>.
          If you are building an API from scratch, you most likely do not have a dataset just lying around. If you do, awesome!
          For us and as you will see in this tutorial, the data lived out there for free consumption on the internet. We just put it into
          a digestible format for the database and our API users. It's also just a great skill to learn and it's fun!
        </li>
        <br />
        <li>
          So what am I going to learn?<br /><br />
          You will learn step-by-step how to create an API from scratch using web scraping.
          After following along our tutorial and linked resources, you should be able to create your own APIs!
        </li>
      </ul>
    </section>
  );
}
