const diceNumber = parseInt(prompt('How many  numbers of dice? '))
const diceNumberDesire= parseInt(prompt('What sum do you want? '))
let odd = 0;

for(let i =0; i<=10000; i++){
  let roll= 0;
  for(let d =1; d<=diceNumber; d++){
    roll += Math.floor(Math.random()*6)+1;
    if (roll==diceNumberDesire){
      odd++
    }
  }
}
probability = (odd/10000)*100

document.querySelector('.probability').innerHTML = `Probability is ${probability}`;