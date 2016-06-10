function split (arr){
  var split = [[],[]];
  var half = Math.floor(arr.length/2);
  for (var i = 0; i < arr.length; i ++){
    if (i < half){
      split[0].push(arr[i]);
    } else split[1].push(arr[i]);
  }
  return split;
}

function merge (arr1, arr2){
  var arr = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] < arr2[0]){
      arr.push(arr1[0]);
      arr1.shift();
    }
    else{
      arr.push(arr2[0]);
      arr2.shift();
    }
  }
  var completion = arr1.length > 0 ? arr1 : arr2;
  completion.forEach(function (n){
    arr.push(n);
  });
  return arr;
}

function mergeSort (arr){
  if (arr.length === 1 || arr.length === 0){
    return arr;
  }
  else{
  var half = split(arr);
  var split1 = mergeSort(half[0]);
  var split2 = mergeSort(half[1]);
  return merge(split1, split2);
  }
}
