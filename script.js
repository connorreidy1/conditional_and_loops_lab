
//## 1 - Weather Report
let temperature = 50
if (temperature > 75) {
    console.log('it is warm');
} else {
    console.log('it it cold')
}


//## 2  - Team Player
let players = ['John', 'Johnny', 'Jack', 'Joe', 'Joseph', 'James', 'Jim', 'Jedward', 'Jedediah']
if (players.length >= 9) {
    console.log('Play ball!')
} else {
    console.log('not enough players')
}


//## 3  - Grade Assigner
const grade = 100

if (grade >= 90) {
    console.log('A')
} else if (grade <= 89 && grade >= 80) {
    console.log('B')
} else if (grade <= 79 && grade >= 70) {
    console.log('C')
} else if (grade <= 69 && grade >= 65) {
    console.log('D')
} else if (grade < 65) {
        console.log('F')
} else {
    console.log('Please enter a valid grade')
}


//##  4 - ATM Function
let checkingAccount = 1000
let savingsAccount = 2000
let actionType = "withdraw"

switch(actionType) {
    case 'withdraw':
        checkingAccount -=100;
        console.log('Withdrawal completed.');
        break;
    case 'deposit':
        checkingAccount +=100;
        console.log('Deposit completed.');
        break;
    case 'transfer':
        checkingAccount -=100;
        savingsAccount +=100;
        console.log('Transfer completed.');
        break;
}

//or

switch(actionType[1]) {
    case 'Withdraw':
      console.log(`Checking Account: $${checkingAccount - 100}`);
      console.log(`Savings Account: $${savingsAccount}`);
      break;
    case 'Deposit':
      console.log(`Checking Account: $ ${checkingAccount + 100.00}`);
      console.log(`Savings Account: $${savingsAccount}`);
      break;
    case 'Transfer':
        console.log(`Checking Account: $ ${checkingAccount - 100.00}`);
        console.log(`Savings Account: $${savingsAccount + 100.00}`);
      break;
    default:
      console.log('Error: Invalid Entry');
  }


//## 5  - High Five!

for (let i = 0; i <= 50; i += 5) {
    console.log(i);
  }



//## 6 - Its Hip to Loop Squares
for (let i = 0; i <= 10; i++) {
    console.log(i * i);
  }
 



//## 7 - F F F Foods
const foods=['potatoes', 'grapes', 'chips', 'fava beans', 'fudge', 'salsa']
  for (let i = 0; i < foods.length; i++) {
    if (foods[i].charAt(0) == 'f') {
    console.log(foods[i])
  }
}



//## Bonus 8 - Even and Odd Numbers
for (let i = 20; i <= 40; i += 2) {
    console.log(i);
  }
for (let i = 21; i <= 40; i += 2) {
    console.log(i);
}




//## Bonus 9 - FizzBuzz!
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Buzz');
    } else if (i % 5 === 0){
        console.log('Fizz');
    } else {
    console.log(i);
  }
}