'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function (movements, sort = false) {
  // clear the container of HTML to fill new data
  containerMovements.innerHTML = '';
  // .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
          <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
            
            <div class="movements__value">${mov}</div>
          </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// to display html of container
// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
  // console.log(balance);
  // account.balance = balance;
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter((mov, i, arr) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);

// Update UI
const updateUi = function (account) {
  // Display movements
  displayMovement(account.movements);

  // Display balance
  calcDisplayBalance(account);

  // display summary
  calcDisplaySummary(account); // passing the whole account
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Updating UI
    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUi(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUi(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(Number(inputClosePin.value), currentAccount.pin, Number(inputClosePin.value) === (currentAccount.pin));
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(index);
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// we are using this variable because once we may sort it and other time we may not need
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  // displayMovement(currentAccount.movements, true);
  displayMovement(currentAccount.movements, !sorted);
  // sorted = !sorted; // each time clicking sort it reverse it
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(1));
arr.splice(1, 2)
console.log(arr.splice(-1));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


///////////////////////////////////////////////////
// New Array methods

// at

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice[-1][0]);
console.log(arr.at(-1));

// for string
console.log('john'.at(0));


//////////////////////////////////////////////////
// Looping array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

console.log('----FOREACH----');
movements.forEach(function(movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});

console.log('------ACCESS COUNTER VARIABLE------');
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}:You deposited ${movement}`);
    }
    else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('----FOREACH----');
// order matter not name
movements.forEach(function(movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`);
    }
    else {
        console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
    }
});


//////////////////////////////////////////////////
// For each for map and set

// MAP
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

  currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`);
  });
  

//   SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, map) {
    console.log(`${value}: ${value}`);
})

////////////////////////////////////////////////////
// DATA TRANSFORMATION

// map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

// Arrow function
console.log('-----Arrow-----');
const movementUSDArrow = movements.map(mov => mov * eurToUsd);
console.log(movementUSDArrow);

console.log('-----for of-----');
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movementsDescription = movements.map((movement, index, arr) => {
  if (movement > 0) {
    return `Movement ${index + 1}: You deposited ${movement}`;
  } else {
    return `Movement ${index + 1}: You withdrew ${Math.abs(movement)}`;
  }
});
console.log(movementsDescription);


///////////////////////////////////////////////////////////////////////
// filter method

const deposits = movements.filter(function(mov) {
  return mov > 0;
});
console.log(deposits);

// movement < 0
const withdrawal = movements.filter(function(mov) {
  return mov < 0;
});
console.log('withdraw: ', withdrawal);

// for of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawalFor = [];
for (const mov of movements) if (mov < 0) withdrawalFor.push(mov);
console.log(withdrawalFor);


///////////////////////////////////////////////////////////////////////
// reduce method

// accumulator -> SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur, i, arr) =>  acc + cur, 0);
console.log(balance);

// using loop
let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const maximum = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);

console.log(maximum);


///////////////////////////////////////////////////////////////////////
// The magic of chaining methods

const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);


///////////////////////////////////////////////////////////////////////
// Find method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);



//////////////////////////////////////////////////////////////////////

console.log(movements);

// SOME Method

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
console.log(movements.some(mov => mov === 130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


//////////////////////////////////////////////////////////////////////

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5], 6], 7, 8];
console.log(arrDeep.flat(2));

const accountMovments = accounts.map(acc => acc.movements);
console.log(accountMovments);
const allMovements = accountMovments.flat(2);
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overalBalance = accounts
  .map(acc => acc.movements)
  .accountMovments.flat(2)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// Flatmap

const overalBalance3 = accounts
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance3);


///////////////////////////////////////////////////////////////////
// Sorting Array

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0 , A is written before B --> keep order
// return > 0, B is written beore A --> switch order

// Ascending
// movements.sort((a, b) => {
//   if(a > b) {
//     return 1;
//   }
//   if(b > a) {
//     return -1;
//   }
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if(a > b) {
//     return -1;
//   }
//   if(b > a) {
//     return 1;
//   }
// });
movements.sort((a, b) => b - a);
console.log(movements);


/////////////////////////////////////////////////////////////////
// More way of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(new Array(1, 2, 3, 4, 5));

// Empty arrays + fill methods
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); // this map method doesn't work
// console.log(x);

// FILL METHOD
// x.fill(1);
x.fill(1, 3, 5);
console.log(x);

// 
arr.fill(23, 4, 6);
console.log(arr);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1);
const c = Array.from({length: 7}, (cur, i) => i + 1);

console.log(z);
console.log(c);



console.log(movementsUI);

labelBalance.addEventListener('click', function() {
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

  console.log(movementsUI.map(el => el.textContent.replace('€', "")));
});
*/

/////////////////////////////////////////////////////////////////
// Array practice

// 1. total deposit in bank till now
//                          takes the movement of each account
const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2. number f deposit more than 1000
const numDeposits1000 = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

const numDeposits1000_2 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000_2);

const numDeposits1000_3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000_3);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but n ot too long'));
console.log(convertTitleCase('this is another title with an EXAMPLE'));
