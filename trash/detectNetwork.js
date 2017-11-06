// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (cardNumber.length === 15 && ["34","37"].includes(cardNumber.slice(0,2))) {
  	console.log("American Express");
  	return "American Express";
  } else if (cardNumber.length === 14 && ["38","39"].includes(cardNumber.slice(0,2))){
  	console.log("Diner's Club")
  	return "Diner's Club";
  } else if (cardNumber.length === 16 && ["51","52","53","54","55"].includes(cardNumber.slice(0,2))){
  	console.log("MasterCard");
  	return "MasterCard";
  } else if ((cardNumber.slice(0,1) === "4") && [13,16,19].includes(cardNumber.length)) {
  	console.log("Visa");
  	return "Visa";
  } else if ((["6011", "644", "645","646","647","648","649","5020","5038"."6304"].includes(cardNumber.slice(0,3)) || ["6011", "644", "645","646","647","648","649","5020","5038"."6304"].includes(cardNumber.slice(0,4))) && [16,19].includes(cardNumber.length) ) {
    console.log("Discover");
    return "Discover";
  } 
  else if (["5018","5020","5038","6304"].includes(cardNumber.slice(0,4)) && ([12,13,14,15,16,17,18,19].includes(cardNumber.length))) {
    console.log("Maestro");
    return "Maestro";
    //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
  } else if ((["4903","4905","4911","4936","564182","633110","6333","6759"].includes(cardNumber.slice(0,4)) || 
    ["4903","4905","4911","4936","564182","633110","6333","6759"].includes(cardNumber.slice(0,5))) && ([16,18,19].includes(cardNumber.length))) {
    console.log("Switch");
    return "Switch"; 
  } else { 
  	console.log("Unknown card type");
  	return "Unknown card type";
  }
  };
  // Once you've read this, go ahead and try to implement this function, then return to the console.



