function merge(arr){
    for(let x in arr){
        arr[x] = [arr[x]];
    }
    return arr;
}
console.log(merge([1,2,3,4,5,6,7,8,9,1,1]));