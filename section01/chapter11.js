// 함수선언

function greeting () {
    // console.log("안녕하세요!");
}

// console.log("호출 전");
greeting(); //소괄호를 반드시 함께 호출
// console.log("호출 후");

// 함수
function getArea (width, height) {
    function another() { //중첩 함수
        console.log("another");
    }

    another();

    let area = width * height;

    return area; // 리턴문에서 작업이 종료되기 때문에 아래 코드는 실행이 안된다.

}

let area1 = getArea(10, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);