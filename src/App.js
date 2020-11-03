import React, { useState } from "react";
import Quote from "./Quote";

export default function App() {
  const [color, setColor] = useState({
    '--color': "#000",
    '--color2': newColor(),
  })
  const quote = quotes[getRandomNumber(quotes.length)];
  const divStyle = {
    ...color
  };

  const updateHandler = () => {
    setColor({
      '--color': color["--color2"],
      '--color2': newColor()
    });
  };

  return (
    <div key={getRandomNumber(1000)} style={divStyle} id="container">
      <Quote info={quote} onClick={updateHandler}/>
    </div>
  );
}

const newColor = () => colors[getRandomNumber(colors.length)];

export function getRandomNumber(top) {
  return Math.floor(Math.random() * top);
}

const colors = [
  "#E3170A",
  "#E16036",
  "#731DD8",
  "#48A9A6",
  "#08B2E3",
  "#57A773",
  "#9CFFD9",
  "#91A6FF",
  "#FF37A6",
  "#5cf64a",
];

const quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  { author: "Frank Zappa", quote: "So many hooks, so little time" },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body wihtout soul.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Mahatma Ghandi",
    quote: "Be the change that you want to see in the world.",
  },
  {
    author: "Robets Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Albert Camus",
    quote:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
  },
  {
    author: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent.",
  },
];
