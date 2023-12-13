/*// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
  }
  


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/

//writeCards() that accepts two arguments: an array of string names, and an event name.

// index.js

function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  // Example usage:
  const namesArray = ["Alice", "Bob", "Charlie"];
  const event = "Birthday";
  
  const thankYouMessages = writeCards(namesArray, event);
  
  // Log the messages to see the output
  console.log(thankYouMessages);
  
function countDown(num) {
    let count = 10;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  countDown(10);