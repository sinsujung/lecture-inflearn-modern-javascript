// 1.대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
// console.log(num6);

// 3. 복합(산술 + 대입) 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;
// console.log(num7);

// 4. 증감 연산자
let num8 = 10;
// console.log(++num8); // 증감 연산자를 변수명 앞에 두는 것을 전위 연산이라고 함
// console.log(num8++); // 증감 연산자를 변수명 뒤에 두는 것을 후위 연산이라고 함

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// console.log(or, and, not);

// 6. 비교 연산자
// 등호를 세번 쓰는 이유
// 두번 사용하면 자료형이 달라도(num이든 string이든) 1이면 결과가 true가 나옴
let comp1 = 1 === "1";
let comp2 = 1 !== 2;
// console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5,comp6);
