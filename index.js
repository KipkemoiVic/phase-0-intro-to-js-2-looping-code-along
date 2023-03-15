// Define the writeCards function
function writeCards(namesArray, event) {
    const messages = [];
    for (let i = 0; i < namesArray.length; i++) {
      messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Define the countDown function
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
