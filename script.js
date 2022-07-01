alert("Quick free Quotes built by chris, No repeat of quotes in this version, Thousands of quotes!");

let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
};
btn.addEventListener("click", getQuote);
