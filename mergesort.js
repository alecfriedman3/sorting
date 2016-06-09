
function mergeSort(arr){
  if (arr.length === 1){
    return arr;
  }
  else{
  var split = split(arr);
  var split1 = split[0];
  var split2 = split[1];
  return merge(mergeSort(split1), mergeSort(split2));
  }
}

function split (arr){
  var split = [[],[]];
  var half = Math.floor(arr.length/2);
  for (var i = 0; i < arr.length; i ++){
    if (i < half){
      split[0].push(arr[i])
    } else split[1].push(arr[i])
  }
  return split;
}

function merge (arr1, arr2){
  var arr = [];

}
