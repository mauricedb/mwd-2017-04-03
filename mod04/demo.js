var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
var calculator = new Calculator();
var x = document.getElementById("x");
var y = document.getElementById("y");
var result = document.getElementById("result");
document.getElementById("add").addEventListener("click", function () {
    var sum = calculator.add(+x.value, +y.value);
    result.innerText = sum.toString();
});
document.getElementById("subtract").addEventListener("click", function () {
    var difference = calculator.subtract(x.value, y.value);
    result.innerText = difference.toString();
});
function printName(person) {
    if (person) {
        console.log(person.name);
    }
}
printName({ name: 'Maurice' });
printName(null);
