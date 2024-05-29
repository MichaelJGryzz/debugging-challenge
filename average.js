// Provided Code with Errors:
//function average(list) {
    //var sum = 0;
  
    //for (var num of list) {
      //sum ++ num;
    //}
  
    //return sum / list.length;
  
//console.log(average([3, 5, 7]));

// Fixed Code:
function average(list) {
  var sum = 0;

  for (var num of list) {
    sum += num;// Used "++" instead of "+=" 
  }

  return sum / list.length;
}// Forgot curly bracket

console.log(average([3, 5, 7]));