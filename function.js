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
