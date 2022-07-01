let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let intro = alert("Quick free Quotes built by Chris, new features in this version; No Repeat of quotes, Sleek UI and vast library.");


const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
};

window.addEventListener("load", intro);
btn.addEventListener("click", getQuote);
