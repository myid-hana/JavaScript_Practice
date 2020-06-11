//1. Use strict
//added in ES 5
//Use this for Vanilla JavaScript
'use strict';

//2. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//3. Logical operators: ||(or), &&(and), !(not)
//||(or)는 제시된 값 중 어느 하나라도 일단 true가 나오면 뒷부분 값이 true인지 false인지 상관없이 true가 되기 때문에 더이상 함수를 진행시키지 않고 다음으로 넘어간다.
//그래서 심플한 값을 먼저 배치하고 무거운 함수를 뒤쪽에 배치하는 것이 효율적이다.
//&&(and)도 마찬가지로 일단 false값이 나오면 뒷부분값과 상관없이 무조건 false기 때문에 심플한 값을 먼저 배치하는 것이 좋다. 
