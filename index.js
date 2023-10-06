const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}

// Helper function for writeCards
function writeCards(names, event) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}


wrapGifts(gifts);
countDown(5);
const thankYouMessages = writeCards(["Ada", "Brendan", "Ali"], "birthday");
console.log(thankYouMessages);
