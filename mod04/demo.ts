class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }
}

var calculator = new Calculator();

var x = <HTMLInputElement>document.getElementById("x");
var y = <HTMLInputElement>document.getElementById("y");
var result = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => {
  var sum = calculator.add(+x.value, +y.value);
  result.innerText = sum.toString();
});

document.getElementById("subtract").addEventListener("click", () => {
  var difference = calculator.subtract(x.value, y.value);
  result.innerText = difference.toString();
});


function printName(person: { name: string } | null) {
  if (person) {
    console.log(person.name)
  }
}


printName({ name: 'Maurice' });

printName(null);

