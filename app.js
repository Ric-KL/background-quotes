//import dataOut from "./test";

const api_url = "https://zenquotes.io/api/quotes/";

const authorTarget = document.querySelector("#authorTag");
const quoteTarget = document.querySelector("#quoteTag");

let globalData = {};

async function getapi(url)
{
  const response = await fetch(url);
  console.log(response);
  var data = await response.json();
  console.log(data[0]);
  globalData = data[0];
}

function writeAuthor(obj) {
  let fetchAuthor = obj["a"];
  authorTarget.innerHTML = "AUTHOR: "+fetchAuthor;
}

function writeQuote(obj) {
  let fetchQuote = obj["q"];
  quoteTarget.innerHTML = fetchQuote;
}

function main() {
  writeAuthor(globalData);
  writeQuote(globalData);
}

getapi(api_url);
main()