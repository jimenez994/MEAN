// part 1
function starString(num) {
    var str = "*";
    return str.repeat(num);
}
let task1 = starString(3);
console.log(task1);
// part 2 
function drawStars(arr) {
    for(var h =0; h < arr.length; h++){
        if(typeof arr[h] === 'string'){
            console.log(arr[h].charAt(0).repeat(arr[h].length));
        }
        var str = "*";
        console.log(str.repeat(arr[h]));
    }
    return "it works"
}
let task2 = drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);
console.log(task2);
