function magic_multiply(x, y) {
    if (x.constructor === Array){
        var newArr = [];
        for(var t = 0; t < x.length; t++){
            newArr.push(x[t]*y);
        }
        return newArr;
    }
    if (typeof y === 'string' ) {
        
        return "Error: Can not multiply by string";
    }
    var a = x * y;
    return a;
}
let test1 = magic_multiply(2, 2);
console.log(test1);