const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById('loader');


// Loading Spinner Shown
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
  }
  
  // Remove Loading Spinner
  function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }


let apiQuotes = [];
// Get Quotes from api and display them
async function getQuotes() {
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const responce = await fetch(apiUrl);
        apiQuotes = await responce.json();
        quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        if (!quotes.author){
            authorText.textContent = "UNKNOWN";
        }
        else{
            authorText.textContent = quotes.author;
        }
        
        quoteText.textContent = quotes.text;
        // Set Quote, Hide Loader
        complete();
    } catch(error ){
        //handle error here
    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  }
  
  // Event Listeners
  newQuoteBtn.addEventListener('click', getQuotes);
  twitterBtn.addEventListener('click', tweetQuote);

//on  load
getQuotes();

 



