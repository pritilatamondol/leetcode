const numb = [1,2,3,18,7,6,9,12,13,78]

function isPrime(num) {
    if (num <= 1)
        return false;
    for (let start = 2; start < num; start++){
        if (num % start == 0) {
            return false
        }
    }
    return true;
}
 let primeNum = numb.filter(isPrime);
console.log(primeNum);

let add = (x,y) => x + y; //arrow function
    
const numb1 = [1, 2, 3, 5];
const numb2 = ["a", "b", 7, "c"];

let res = numb1.reduce((x, y) => x - y);
console.log(res);
 
console.log(0 && hi);
 


let diff = function (x, y) {
  return x - y;
};
console.log("Sum:" + sum(10, 20));
console.log("Diff:" + diff(10, 20));

function sum(x, y) {
  return x + y;
}

console.log([] == []);
var a;
var b = (a = 3) ? true : false;
console.log(b);

function sayHello() {
  console.log("hello");
}

console.log(sayHello.prototype);

function printA() {
  console.log(answer);
  var answer = 1;
}
printA();
printA();

et x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
