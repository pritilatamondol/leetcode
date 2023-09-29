// 3 ways to reverse a string
const str = "I am testing";
function reverseStrUsingInbuilt(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStrUsingInbuilt(str));

//In normal way
function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("hello");

//Recursive way
function reverseString(str) {
  if (str === "") return "";
  else
      return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello i Am"));
