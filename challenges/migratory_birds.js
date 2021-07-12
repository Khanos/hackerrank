// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr){
  // Write your code here
  var hash = {};
  var max = 0;
  var max_id = -1;
  for (var i = 0; i < arr.length; i++){
    if(hash[arr[i]] === undefined){
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
    if(hash[arr[i]] > max){
      max = hash[arr[i]];
      max_id = arr[i];
    }
  }
  if(max > 1){
    for (var i = 0; i < arr.length; i++){
      if(arr[i] !== max_id){
        if(hash[arr[i]] === max){
          max_id = Math.min(max_id, arr[i]);
        }
      }
    }
  }
  return max_id;
}