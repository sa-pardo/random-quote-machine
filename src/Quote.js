import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

export default function Quote(props) {
  const quote = props.info;

  return (
    <div id="quote-box" >
      <p id="text">"{quote.quote}</p>
      <p id="author"> - {quote.author}</p>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
      <input id="new-quote" onClick={props.onClick} type="button" value="New Quote"></input>
    </div>
  );
}
