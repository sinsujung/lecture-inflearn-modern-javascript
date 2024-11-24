<!-- HTML 역할

요소들의 내용, 배치, 모양을 정하기 위해 사용하는 언어

색상이나 디자인 등의 수정은 불가

CSS 역할

요소들의 색상, 크기 등의 스타일을 설정할 수 있음

JavaScript의 역할

웹 내부에서 발생하는 다양한 기능을 만들 수 있는 언어

웹을 움직이게 하는 "웹의 근육"이라고 표현 할 수 있음

JavaScript는 어떻게 실행될까?

JavaScript는 "JavaScript 엔진"에 의해 실행된다.

엔진은 게임 구동기, JavaScript는 게임이라고 생각하면된다.

JavaScript 엔진은 브라우저에 기본 탑재되어 있다.

따라서 웹 브라우저를 이용하면 간단한 JavaScript 코드를 직접 실행해 볼 수 있다.

개발자 도구 여는 법

MacOs : option + command + i

Window: f12

live-server 여는 법(html 파일에서 실행)
MacOs : command + shift + p
Window : ctrl + shift + p


[변수, 상수란?]

변수, 상수는 값을 저장하는 박스

ex

상수/변수: "Hello", "970107", "[1, 2, 3]"


[자료형이란?]

자료형(Type) = 집합

동일한 속성이나 특징을 가진 원소들을 묶은 것

ex. 고양이와 강아지는 "동물"이라는 집합으로 묶임

String 타입

ex) "", "Hello", "winterlood", "한입리액트", "이정환"

Number 타입

ex) -20, 0.25, 729, -0.123, 0


[JavaScript의 자료형(Data Type)]

원시 타입

기본형 타입이라고도 불림

프로그래밍에 있어 가장 기본적인 값들의 타입을 의미함
- Number

- String

- Boolean

- Null

- Undefined


객체 타입

- Object

- Array

- Function

- REgexExp


[형 변환이란?]

형 변환(Type Casting)

어떤 값의 타입을 다른 타입으로 변경하는 것을 말함

Number Type 10을 String Type의 "10"으로 변환하는 것

묵시적 형 변환(암묵적 형변환)

개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환 하는 것을 말함

명시적 형 변환

개발자가 직접 함수 등을 이용해 형 변환을 일으킴


[연산자란(Operator)란?]

프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함

조건문(Conditional Statement)이란?

특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법

대표적으로 if, switch 조건문 이 존재함

변수의 값을 기준으로 각각 다른 코드를 실행시키고 싶을 때는 switch문, 복잡한 여러개의 조건을 사용하고 싶을 때는 if문을 사용한다.


[반복문(Loop, Iteration)]

어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법


[함수]

중복으로 작성된 유사한 기능을 하는 코드는

동일한 기능을 일일이 타이핑 해야 함

향후 코드를 수정시 문제 될 수 있음

함수로 해결 가능


[콜백 함수(Callback Function)란?]

자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함

function main(value) {
 value();
}

function sub() {
 console.log("sub");
}

main(sub); // 메인이라는 다른 함수에 인수로써 전달 된 함수를 callback 함수라고 함.


[스코프(Scope)란?]

우리말로 "범위"를 뜻함

변수나 함수에 접근하거나 호출할 수 있는 범위를 말 함

function funcA() {
  let a = 1; // -> a 접근 가능 영역(스코프)
}

console.log(a); // -> a 접근 불가능 영역


[객체(Object)란?]

객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

let person = {
  name: "이정환",
  nickname: "winterlood",
  age: 27,
  location: "목동"
};


[배열(Array)이란?]

여러개의 값을 순차적으로 담을 수 있는 자료 형
-->
