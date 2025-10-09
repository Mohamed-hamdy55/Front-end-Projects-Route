const initApp = () => {
  "use strict";
  
  const quotes = [
    {
      author: "Elbert Hubbard",
      quote: "Do not take life too seriously. You will not get out alive."
    },
    {
      author: "Frank Sinatra",
      quote: "The best revenge is massive success."
    },
    {
      author: "Nelson Mandela",
      quote: "Resentment is like drinking poison and waiting for your enemies to die."
    },
    {
      author: "Epictetus",
      quote: "It's not what happens to you, but how you react to it that matters."
    },
    {
      author: "Wayne Gretzy",
      quote: "You miss 100% of the shots you don't take."
    },
  ];

  const generateQouteButton = document.querySelector(".btn");
  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");
  
  // remaning qoutes is now all the qoutes, Note splice make 'shallow copy'
  let remainingQuotes = quotes.slice();

  generateQouteButton.addEventListener('click',() => {
    // if all qoutes have been shown, so we need to repeated the process by
    // reset the remaning array to have all the qoutes again
    if (remainingQuotes.length === 0) {
      remainingQuotes = quotes.slice();
    }

    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);

    // delete the selected array from remaning array and return it to be showen
    const selectedQuote = remainingQuotes.splice(randomIndex, 1)[0];

    quote.textContent = selectedQuote.quote;
    author.textContent = selectedQuote.author;
  });

};

document.addEventListener("DOMContentLoaded", initApp);
