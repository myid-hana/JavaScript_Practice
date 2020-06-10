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

//4. variable types
//(1)primitive, single item: 더이상 나눠질 수 없는 가장 작은 아이템. number, string, boolean, null, undefined, symbol 등이 있다.
//(2)object, box container: single item들을 여러개 묶어서 한 단위 혹은 박스 형태로 관리할 수 있게 해주는 것.
//(3)function: 자바스크립트는 first-class function이 지원되며, 함수가 변수에 할당이 가능하고 함수에 parameter로도 전달이 되고 함수의 return 타입으로도 함수를 return 하는 것이 가능하다.

const count = 17; //integer 정수
const size = 1.7; //decimal number 소수점의 숫자
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
//자바스크립트는 값에 상관없이 number타입으로 쓸 수 있다.

//special number values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;

//string 자바스크립트에서는 한 글자든 여러글자든 모두 string으로 취급
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan; //string과 변수가 함께 출력도 가능.
const helloBob = `hi ${brendan}!`;
//template literals(string): 변수의 값이 자동으로 적용되어 출력됨.
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);  //출력값: value: hi brendan!, type: string
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
//template literals를 쓰면 복잡하게 플러스로 string과 변수를 연결하던 것들을 간편하게 쓸 수 있다.

//boolean
//false: 0, null, undefined, NaN, '' 모두 false로 간주
//true: any other value
const canRead = true;
const test = 3 < 1; //false

//null
let nothing = null;
//null로 빈 값이 할당되어 있는 상태

let x;
//undefined는 아무 값도 할당되지 않은 상태

//symbol 맵이나 자료구조에서 고유한 식별자가 필요할 때, 동시 다발적으로 일어나는 코드에서 우선순위를 주기 위해서 정말 고유한 식별자가 필요할 때 사용한다. 식별자를 string으로 쓰게 되면 다른 파일에서  같은 string을 썼을 때 동일한 식별자로 간주되지만, symbol은 동일한 string으로 만들어도 다르게 간주되기 때문에 string에 상관없이 고유한 식별자를 만들 때 사용되어 진다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true. Symbol.for을 이용하면 동일한 symbol을 만들 수 있다.
console.log(`value: ${symbol1}, type: ${typeof symbol1}`); //error. symbol은 바로 출력하면 에러가 발생한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  //.description을 이용해서 string으로 출력해줘야 한다. 
