const api_url = "https://zenquotes.io/api/quotes/";

const authorTarget = document.querySelector("#authorTag");
const quoteTarget = document.querySelector("#quoteTag");

async function getapi(url) {
  const response = await fetch(url);
  console.log(response);
  var data = await response.json();
  console.log(data[0]);
  return data[0];
}

function writeAuthor(obj) {
  let fetchAuthor = obj["a"];
  authorTarget.innerHTML = "AUTHOR: " + fetchAuthor;
}

function writeQuote(obj) {
  let fetchQuote = obj["q"];
  quoteTarget.innerHTML = fetchQuote;
}

function main() {
  let data = {}
  try {
    data = getapi(api_url);
  }
  catch {
    data = {"q":"error", "a": "error"};
    console.log("API failed to fetch data")
  }
  writeAuthor(data);
  writeQuote(data);
}
main()