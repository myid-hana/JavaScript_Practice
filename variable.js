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


//var Dont use this!
//var hoisting: 어디에서 변수가 선언되었는지에 상관없이 제일 위로 선언을 끌어 올려주는 것.
//var hoistiong 때문에 최근에는 var를 쓰지 않으며 let으로 대체한다.
//var에는 block scope가 적용되지 않는다. 아무리 블럭 안에 안에 안에 변수를 선언해도 어디서나 변수를 사용할 수 있게 된다.


//3. constant
//한번 할당되면 절대 값이 바뀌지 않는 변수. immutable data type
//할당된 메모리를 가리키고 있는 포인터가 잠겨있어서 변수가 선언될 때 할당된 값을 변경할 수 없다.
//1. 보안상의 이유로 2. 여러 thread들이 동시에 값을 변경하려고 할 때 안전하게 하기 위해 3. 실수 방지를 위해 사용한다. 
