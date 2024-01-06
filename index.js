const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  //map goes through each  tutorial
  return tutorials.map((title) => {
    //uses split to go into the words and then another map to go through each word
    return title
      .split(" ")
      .map((word) => {
        //upper case the words
        //slice the uppercase to Capital and keep the rest as lowercase
        return word.charAt(0).toUpperCase() + word.slice(1);
        //puts the words back together
      })
      .join(" ");
  });
};
