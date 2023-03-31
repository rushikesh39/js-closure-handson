// Q1
   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// Q2
console.log('Q2');
let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// Q3:-
console.log('Q3')
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

// Q4:-Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function area(length){
    function calculate(breadth){
        console.log('Area of Rectangel:-',length*breadth)
    }
    calculate(10);
}
area(20);

// Q5:-

function createCounter() {
    var counter = 0;
     function increment() {
      counter++;
      console.log(counter);
      
    }
    return increment;
  }
  
  var myCounter = createCounter();
  myCounter(); // logs 1
  myCounter(); // logs 2
  myCounter(); // logs 3

//   Q6:-

console.log('Q6')
var a = 12;
(function () {
  console.log(a);
})();

// Q7

var x = (function () {
  var a = 12;
  return function () {
    console.log(a);
  };
})();
x();

// Q:-8
console.log('Q8');
var globalVar = "xyz";

        (function outerFunc(outerArg) {
            var outerVar = 'a';
            
            (function innerFunc(innerArg) {
            var innerVar = 'b';
            
            console.log(
                "outerArg = " + outerArg + "\n" +
                "innerArg = " + innerArg + "\n" +
                "outerVar = " + outerVar + "\n" +
                "innerVar = " + innerVar + "\n" +
                "globalVar = " + globalVar);
            
            })(456);
        })(123);