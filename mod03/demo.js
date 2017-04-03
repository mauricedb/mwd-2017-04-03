function createCat(name) {



  class Cat {

    constructor() {

    }

    sleep() {
      console.log(name + ' is sleeping')
    }

    get name() {
      return name;
    }

    set name(value) {
      name = 'It is now ' +value;
    }
  }

  return new Cat();
}

var x = 'Zorro';
var zorro = createCat(x);

zorro.name = 'Diego';
console.log(x)

console.log(zorro.name);


console.log(`The cat name is ${zorro.name} 


at ${new Date().toLocaleTimeString()}`)


document.getElementById('demo').innerText = `The cat name is ${zorro.name} 


at ${new Date().toLocaleTimeString()}`


// document.getElementById('demo').innerText = "gdg\n\n\n\nsss"