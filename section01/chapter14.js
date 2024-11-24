// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    function funcB() {}
}

funcA();

if(true) {
    let c = 1;
}

for (let i = 0; i < 10; i++) {
    let d = 1;
}
// 중괄호 안에 있는 변수는 지역 스코프라 밖에서 호출할 수 없다.
