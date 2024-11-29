// math 모듈

//함수 선언 앞에 export를 붙여서 esm 가동
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

//CJS
// module.exports = {
//     add,
//     sub,
// };

//esm
// export {add, sub};

//아래처럼 작성하면 math 모듈을 대표하는 기본 값이 됨
export default function multiply(a, b) {
    return a * b;
}
