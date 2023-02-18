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
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    person: "Oscar Wilde",
  },
  {
    quote: "That it will never come again is what makes life so sweet.",
    person: "Emily Dickinson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    person: "George Eliot",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: "Pain is inevitable. Suffering is optional.",
    person: "Haruki Murakami",
  },
  {
    quote: "All the world's a stage, and all the men and women merely players.",
    person: "William Shakespeare",
  },
  {
    quote: "Be kind, for everyone you meet is fighting a hard battle.",
    person: "Plato",
  },
  {
    quote: "Unable are the loved to die for love is immortality.",
    person: "Emily Dickinson",
  },
  {
    quote: "Let me live, love, and say it well in good sentences.",
    person: "Sylvia Plath",
  },
  {
    quote: "Don't let your happiness depend on something you may lose.",
    person: "C.S. Lewis",
  },
  {
    quote: "We are all broken, that's how the light gets in.",
    person: "Ernest Hemingway",
  },
  {
    quote:
      "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
    person: "Voltaire",
  },
  {
    quote: "Life is tough my darling, but so are you.",
    person: "Stephanie Bennett Henry",
  },
  {
    quote: "Self-awareness and self-love matter. Who we are is how we lead.",
    person: "Brene Brown",
  },
  {
    quote:
      "Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
    person: "Stephen King",
  },
  {
    quote:
      "Get it down. Take chances. It may be bad, but its the only way you can do anything really good.",
    person: "William Faulkner",
  },
  {
    quote: "As a writer, you should not judge, you should understand.",
    person: "Ernest Hemingway",
  },
  {
    quote: "To produce a mighty book, you must choose a mighty theme.",
    person: "Herman Melville",
  },
  {
    quote:
      "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.",
    person: "John Steinbeck",
  },
  {
    quote:
      "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
    person: "John Green",
  },
  {
    quote:
      "The Six Golden Rules of Writing: Read, read, read, and write, write, write.",
    person: "Ernest Gaines",
  },
  {
    quote:
      "As for Write what you know, I was regularly told this as a beginner. I think its a very good rule and have always obeyed it. I write about imaginary countries, alien societies on other planets, dragons, wizards, the Napa Valley in 22002. I know these things. I know them better than anybody else possibly could, so its my duty to testify about them.",
    person: "Ursula K. Le Guin",
  },
  {
    quote:
      "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.",
    person: "Annie Proulx",
  },
  {
    quote:
      "Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write.",
    person: "Rainer Maria Rilke",
  },
  {
    quote:
      "The purpose of a writer is to keep civilization from destroying itself.",
    person: "Albert Camus",
  },
  {
    quote:
      "A writer never has a vacation. For a writer life consists of either writing or thinking about writing.",
    person: "Eugene Ionesco",
  },
  {
    quote:
      "Read, read, read. Read everything  trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! Youll absorb it. Then write. If its good, youll find out. If its not, throw it out of the window.",
    person: "William Faulkner",
  },
  {
    quote:
      "A good writer possesses not only his own spirit but also the spirit of his friends.",
    person: "Friedrich Nietzsche",
  },
  {
    quote:
      "Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul.",
    person: "Meg Rosoff",
  },
  {
    quote:
      "I am not at all in a humour for writing; I must write on until I am.",
    person: "Jane Austen",
  },
  {
    quote:
      "You dont start out writing good stuff. You start out writing crap and thinking its good stuff, and then gradually you get better at it. Thats why I say one of the most valuable traits is persistence.",
    person: "Octavia E. Butler",
  },
];

$btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  $quote.innerText = quotes[random].quote;
  $person.innerText = quotes[random].person;

  // const renderedText = htmlElement.innerText;
});
