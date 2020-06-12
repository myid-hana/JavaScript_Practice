//1. Use strict
//added in ES 5
//Use this for Vanilla JavaScript
'use strict';


//1. 함수 선언
//하나의 함수는 한 가지의 일만 하도록 만들어야 한다.
//동사 형태로 이름을 짓는 것이 좋다.
//js에서 function은 object이다.


//2. Default parameters (added in ES6)
//parameter값이 undefined일 경우를 대비해서 default parameter값을 정해둔다.
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');


//3. Rest parameters (added in ES6)
//parameter값 앞에 ...을 쓰면 배열로 parameter을 받을 수 있다.
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {  //위와 같은 내용 , 더 간단한 표현
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'hana');


//4. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);
//값을 반환할 때 return을 쓰는데 return을 쓰지 않은 함수는 return undefined가 써있는 것과 같다.

//5. Early return, early exit
//복잡한 조건문을 쓰게 될 때 가독성이 떨어지기 때문에 if나 else를 반복해서 쓰는 것 보다는 조건에 맞지 않으면 빨리 return해서 다음으로 넘어가게 하는 것이 가독성이 좋다.

//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic...
}
