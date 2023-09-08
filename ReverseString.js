// 3 ways to reverse a string
function reverseStr(str) {
    return str.split("").reverse().join("");
}
//console.log(reverseStr("This is shilpa."));

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString("hello");

function reverseString(str) {
  if (str === "") return "";
  else
      return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello i Am"));
