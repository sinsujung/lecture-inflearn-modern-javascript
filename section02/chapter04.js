// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

// 배열
let arr1 = [1, 2, 3];
// arr1 배열을 아래 4 뒤에 넣고 싶으면
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // arr1 배열의 값이 바뀌면 위험하다
let arr2 = [4, ...arr1, 5, 6]; //...이 spread 연산자
// console.log(arr2);

//객체
let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
   ...obj1,
    c: 3,
    d: 4,
};
// console.log(obj2);

//함수
function funcA(p1, p2, p3) {
    // console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수
// 주의사항: Rest 매개변수 뒤에는 추가적으로 변수가 들어갈 수 없다.
//          rest 대신 다른 이름 사용 가능
function funcB(one, two, ...rest) {
    console.log(one);
    console.log(two);
    console.log(rest);
}

funcB(...arr1);
