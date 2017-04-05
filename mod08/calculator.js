class Calculator {
  add(x, y) {
    return (+x) + (+y);
  }

  subtract(x, y) {
    return x - y;
  }
}

var calculator = new Calculator();

var x = document.getElementById("x");
var y = document.getElementById("y");
var result = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => {
  var sum = calculator.add(x.value, y.value);
  result.innerText = sum;
});

document.getElementById("subtract").addEventListener("click", () => {
  var difference = calculator.subtract(x.value, y.value);
  result.innerText = difference;
});
