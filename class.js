'use strict';

//class와 object
//관련 변수와 함수를 묶어놓은 것을 class라고 한다.
//class: template, declare once, no data in
//클래스를 이용해서 인스턴스를 생성하면 object가 된다.
//object: instance of a class, created many times, data in


//1. class declaration
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


//2. getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {//사용자가 잘못 설정하는 것을 방지
    return this._age; //다른 이름의 변수를 한 개 더 만들어줌.
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;  //value의 값이 0이하 라면 0으로 하고 아니면 지정된 value값을 사용.
  }
}

const user1 = new User('hana', 'job', -1);
console.log(user1.age);


//3. 상속과 다양성
//a way for one class to extend another class.
class Shape{
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`)
  }

  getArea() {
    return thid.width * this.height;
  }
}

class Rectangle extends Shape {} //extends를 이용하면 클래스에 정의해준 것을 상속받아 쓸 수 있다.
//공통된 속성을 일일이 작성하지 않아도 된다.
class Triangle extends Shape{
  draw() {
    super.draw(); //overriding한 것과 함께 부모 클래스에 있던 함수도 같이 호출하고 싶다면 super을 이용한다. 
    console.log('boom!');
  }
  getArea() {
    return (this.width * this.height) / 2; //overriding: 상속받은 것들 중 필요한 부분만 수정해서 사용가능.
  }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw(); //drawing blue color of
console.log(triangle.getArea());  //200
