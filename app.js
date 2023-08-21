const api_url = "https://api.quotable.io/random";

const authorTarget = document.querySelector("#authorTag");
const quoteTarget = document.querySelector("#quoteTag");

async function getapi(url) {
  const response = await fetch(url);
  console.log(response);
  var data = await response.json();
  outputArr = [];
  outputArr.push(data.content);
  outputArr.push(data.author);
  return outputArr;
}

function writeAuthor(arr) {
  let fetchAuthor = String(arr[1]);
  authorTarget.innerHTML = "AUTHOR: " + fetchAuthor;
}

function writeQuote(arr) {
  let fetchQuote = String(arr[0]);
  quoteTarget.innerHTML = fetchQuote;
}

async function main() {
  let data = await getapi(api_url);
  console.log(data)
  writeAuthor(data);
  writeQuote(data);
  setTimeout(main,30000)
}

main()