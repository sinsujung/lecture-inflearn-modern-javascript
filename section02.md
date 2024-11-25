<!--
[자바스크립트 특수 개념 Truthy & Falsy]

JavaScript 에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다.

Truthy & Falsy란?

참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

JavaScript의 모든 값은 Truthy 하거나 Falsy 합니다.

이를 이용하면 조건문을 간결하게 만들 수 있음


[단락평가(Short-circuit Evaluation)이란?]

let varA = false;

let varB = true;

// AND 연산자
// 앞에 varA 변수에 False 값을 넣는다
console.log(varA && varB);

// OR 연산자
// 앞에 varB 변수에 True 값을 넣는다
console.log(varB || varA);

[구조 분해 할당이란?]

배열이나 객체에 저장된 여러개의 값들을 분해해서 각각 다른 변수에 할당하는 문법

[원시타입 VS 객체타입]

원시타입과 객체타입으로 나누는 이유

원시타입과 객체타입은 값이 저장되거나 복사되는 과정이 서로 다르기 때문


원시 타입

Number, String, Boolean 등...

값 자체로써 변수에 저장되고 복사된다.

불변값이다.(메모리 값 수정 X)


객체 타입

Object, Array, Function 등...

참조값을 통해 변수에 저장되고 복사된다.

가변값이다.(메모리 값 수정 O)

주의사항 1. 의도치 않게 값이 수정될 수 있다.
주의사항 2. 객체간의 비교는 기본적으로 참조값을 기준으로 이루어진다.
주의사항 3. 배열과 함수도 사실 객체이다.

얕은 비교
- 참조값을 기준으로 비교

깊은 비교
- 객체를 문자열로 변환하여 비교
- JSON.stringify 등의 내장 함수를 이용해야 함

-->