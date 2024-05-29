// Provided Code with Error:
//var input = process.argv[2];

//if (input)
  //console.log(reverse(input));

//function reverse(original) {
  //return orignal.split('').reverseList().join('');
//}

// Fixed Code:
var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(original) {
  return original.split('').reverse().join('');// Spelt "original" wrong in the original.split() function
  // There is no "reverseList()" method in JS
}