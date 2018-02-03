// Math 1
function zero_neagetivity(arr) {
    for(var i = 0; i < arr.length;i++){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}
let math1 = zero_neagetivity([1,2,3,4,-5,6,7,7]);
console.log(math1);
// Math 2
function is_even(num) {
    if(num % 2){
        return "is odd"
    }else{
        return "is even"
    }
}
let math2 = is_even(14);
console.log(math2);
// Math 3
function how_many_even(arr2) {
    var count = 0;
    for(var j = 0; j < arr2.length;j++){
        if(arr2[j] % 2 == 0){
            count++
        }
    }
    return count;
}
let math3 = how_many_even([1, 2, 3, 4, 5, 6, 7, 7,4,6,8,12,14,16]);
console.log(math3);
// Math 4
function create_dummy_array(num4) {
    var arr3 = [];
    for(var p = 0; p < num4; p++){
        arr3.push(Math.floor(Math.random() * 9) + 0)
    }    
    return arr3;
}
let math4 = create_dummy_array(4);
console.log(math4);
// Math 5
function random_choice(arr6) {
    return arr6[Math.floor(Math.random() * arr6.length) + 0]
    
}
let math5 = random_choice([1, 2]);
console.log(math5);