const getUserChoise = userInput => {
  userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
return userInput;
}else{console.log('Error!');}
};


const getComputerChoise = () => {
let number = Math.floor(Math.random() * 3);
switch(number){
case 0:    
 number = 'rock';
break;
case 1:
 number = 'paper';
break;
case 2:
 number = 'scissors';
break; 
}
return number;
};


const determineWinner = (userChoise, computerChoise) => {
if(userChoise === computerChoise){
  return 'The game is a tie.';}
if(userChoise === 'rock'){
  if(computerChoise === 'paper'){return 'Computer won!';
  }else {return 'User won!';}
}
 if(userChoise === 'paper'){
if (computerChoise === 'scissors') 
 { return 'Computer won!';}
 else{return 'User won!';}
 }
if(userChoise === 'scissors'){
  if(computerChoise === 'rock'){return'Computer won!';}
    else{return'User won!';}
}
};

function playGame() {
const userChoise = getUserChoise('rock');
const computerChoise = getComputerChoise();
console.log(userChoise, computerChoise);
console.log(determineWinner(userChoise, computerChoise));
};
playGame();  

