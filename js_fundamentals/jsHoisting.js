// it should give an error of something that is undefined
// test - undefined
console.log(hello);
var hello = 'world';

// error the function should be called after not before
// test = no errors
var needle = 'haystack';
test();

function test() {
    var needle = 'magnet';
    console.log(needle);
}

// console log super cool 
// test - super cool
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// print chicken, print half-chicken
// test - chicken , half-chicken
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// it wont print anything
// TypeError: mean is not a function
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// print san jose , seattle, burbank,burnbank
// it printed san jose , seattle, burbank , san jose
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);





