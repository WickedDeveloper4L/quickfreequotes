let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
let intro = alert("Quick free Quotes built by Chris, new features in this version; No Repeat of quotes, Sleek UI and vast library.");
let copy = document.getElementById("copy");
let board = document.getElementById("board");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });

      copy.innerHTML = '<i class="fa-regular fa-clipboard"></i>Copy Quote';
};

let copyQuote = () => {
  const copyText = document.getElementById("board").textContent;
  const textArea = document.createElement('textarea');
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  copy.innerHTML = 'Quote copied';
  textArea.remove();
};


window.addEventListener("load", intro);
btn.addEventListener("click", getQuote);
copy.addEventListener("click", copyQuote);
