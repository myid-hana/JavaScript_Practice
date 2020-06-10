//1. Use strict
//added in ES 5
//Use this for Vanilla JavaScript
'use strict';

//2. Variable
//let (added in ES6)

let globalName = 'global name';
//블럭 밖에 선언되어 코드 어디서나 접근 가능한 변수를 global scope라고 한다.
//블럭 안에서나 블럭 밖에서나 모두 출력 가능.
//global scope는 어플리케이션이 실행되는 동안 항상 메모리에 저장되어있기 때문에 최소한으로 쓰는 게 좋다. 

{
  let name = 'hana';
  console.log(name); //블럭 내에서는 hana를 출력할 수 있지만
}
console.log(name); //블럭 박에서는 hana를 출력할 수 없음. 아무값도 출력되지 않는다.
//Block scope: 블럭 밖에서는 블럭 안에 있는 내용에 접근할 수 없다.
