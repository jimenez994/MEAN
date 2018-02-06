module.exports = function () {
    return {
        add: function (num1, num2) {
            var result = num1 + num2;
            console.log("add result:" + result);
            return result;
            // add code here 
        },
        multiply: function (num1, num2) {
            var result = num1 * num2;
            console.log("multiply result:" + result);
            return result;
            // add code here 
        },
        square: function (num) {
            var result = num * num;
            console.log("square result:" + result);
            return result;
            // add code here 
        },
        random: function (num1, num2) {
            var result = Math.floor(Math.random() * num2) + num1
            console.log("random result:" + result);
            return result;

            // add code here
        }
    }
};