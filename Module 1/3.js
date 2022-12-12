
/*
let firstNumber=window.prompt('Input your first number please ')
    document.write('first number: ',firstNumber+'<br>')
let secondNumber=window.prompt('Input your seconds number please ')
    document.write('second number: ',secondNumber+'<br>')
let thirdNumber=window.prompt('Input your third number please ')
    document.write('third number: ',thirdNumber+'<br>')

var num1=parseInt(firstNumber)
var num2=parseInt(secondNumber)
var num3=parseInt(thirdNumber)

let sum;
  sum=(num1+num2+num3)
  document.write('Sum is: ',sum+'<br>')

let product;
  product=(num1*num2*num3)
  document.write('Product: ',product+'<br>')

let average;
  average=(sum/3)
  document.write('Average: ',average+'<br>')

 */

const firstNum = +prompt('Enter your first number:');
const secondNum = +prompt('Enter your second number');
const thirdNum = +prompt('Enter your third number');

document.querySelector('#Sum').innerHTML = `The Sum is ${firstNum+secondNum+thirdNum}`;
document.querySelector('#product').innerHTML = `The Product is ${firstNum*secondNum*thirdNum}`;
document.querySelector('#Average').innerHTML = `The Average is ${(firstNum+secondNum+thirdNum)/2}`;

