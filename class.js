'use strict';

//class와 object
//관련 변수와 함수를 묶어놓은 것을 class라고 한다.
//class: template, declare once, no data in
//클래스를 이용해서 인스턴스를 생성하면 object가 된다.
//object: instance of a class, created many times, data in


//class declaration
class Person {
  //constructor 생성자
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello`);
  }
}

const hana = new Person('hana', 30); //object 생성
console.log(hana.name);
console.log(hana.age);
hana.speak();
