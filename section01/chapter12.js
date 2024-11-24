// 1. 함수 표현식
function funcA() {
    // console.log("funcA");
}

let varA = funcA; 
// console.log(varA);//함수 자체가 출력 됨
varA();

let varB = function funcB() {
    // console.log("funcB");
}; //선언식이 아니고 값으로써 사용하기 때문에 funcB로 호출할 수 없음. 
//따라서 아래와 같이 생성할 때 이름 없이 그냥 생성해도 된다(어짜피 사용할 수 없어서).
let varB2 = function () {
    // console.log("funcB2");
}; // 이름이 없는 함수를 익명함수라고 함

varB2();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};
console.log(varC(10));