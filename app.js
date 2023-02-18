let $btn = document.querySelector("#new-quote"),
  $quote = document.querySelector(".quote"),
  $person = document.querySelector(".person");

const quotes = [
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote: "You can't blame gravity for falling in love.",
    person: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    person: "Alan Kay",
  },
  {
    quote: "If you want to achieve greatness, stop asking for permission.",
    person: "Unknown",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas Edison",
  },
];

$btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  $quote.innerText = quotes[random].quote;
  $person.innerText = quotes[random].person;

  // const renderedText = htmlElement.innerText;
});
