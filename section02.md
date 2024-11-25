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
-->
