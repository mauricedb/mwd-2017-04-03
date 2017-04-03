(function() {
  "use strict";
  var x = 1;

  demo();
  //   fn();

  function demo() {
    var y = 2;

    var z = 3;

    window.thisIsAGlobal = {};

    console.log("In demo");

    return {
      name: "Maurice"
    };
  }

  var fn = function() {
    console.log("In fn");
  };

  demo();
  fn();
  [1].map(function() {});
  //   var data = [1];
  //   data.map(.....)
  "".toLowerCase();

  console.log(demo.toString());

  console.log(0.1 + 0.2 == 0.3);

  console.log(new Date(2017, -12, -111131));

  console.log(new Date(0));
  console.log(Date.now());

  console.log(demo());

  //   function add(x , y) {
  //       console.log(x, y)
  //     return x + y;
  //   }

  function add() {
    console.log(arguments);
    var sum = 0;

    if (arguments.length) {
      for (var i = 0; i < arguments.length; i++) {
        sum += +arguments[i];
      }
    }
    return sum;
  }

  console.log(add());
  console.log(add(1));
  console.log(add(1, 2));
  console.log(add(1, 2, 3));
  console.log(add(1, 2, "1"));

  console.log(+"false");

  function Animal() {}

  function Cat(name) {
    if (!(this instanceof Cat)) throw new Error("Please use new!");

    console.log(this);

    this.name = name;
    // this.sleep = function(){
    //     console.log(this.name + ' is sleeping');
    // }
  }

  Cat.prototype = new Animal();

  Cat.prototype.sleep = function() {
    console.log(this.name + " is sleeping");
  };

Cat.prototype.loadFromAjax= function() {
    $.getJSON('').then(this.loaded.bind(this))
}

  Cat.prototype.name = "Unkown";

  var zorro = new Cat("zorro");
  console.log(zorro);
  zorro.sleep();

//   zorro.sleep = function() {
//     console.log("But not at 5AM");
//   };

  zorro.sleep();

  // Cat.prototype = {}
  // delete Cat.prototype.sleep;
  delete zorro.sleep;

  var diego = new Cat("Diego");
  zorro.sleep();
  diego.sleep();


var sleep = zorro.sleep;

console.log('--------------')
// sleep()

sleep.apply({name: 2});

var fn2 = sleep.bind({name:'Bound'})
fn2();

var o = {
    name: 'Maurice',
    sleep: sleep,
    fn2: fn2
}

o.sleep();
o.fn2();

})();
