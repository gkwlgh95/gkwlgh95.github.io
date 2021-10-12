'use strict';

let today = new Date();//DATE 클라스의 객체 today생성
console.log(today.toGMTString());//객체 today에 메소드 toGMTString()호출

let str = new String('chois');

console.log(str.toUpperCase());

let arr = new Array(1000, "chois");

console.log(arr[0]);

//앞의 객체와 math객체는 사용법ㅂ이 다름

//1.앞의 경우 객체를 먼저 생선한 후 프로퍼티 또는 매소드를 사용
//2.math는 객체 생성 없이 사용할 수 있다. 클라스이름.ㅊ
let a = Math.sqrt(2);
console.log(a);
console.log(Math.PI);

class Student{
    constructor(str){
        this.name =str;

    }
    print(){
        console.log(this.name);

    }
}

let s=new Student("하지호");
s.print();
//함수선언
function test1() {console.log('test1');} 

test1();

let test2 = function() { 
    console.log("test2");
};

test2();

let test3 = () => console.log('test3');

test3();


let kv = { name : "chois", age : 61};

console.log(kv.name);
console.log(kv['name']);
console.log(kv.age);

//프로토타입으로 객체 만들기
