function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor

        setTimeout(() => {
    
            if(typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
            // console.log("안녕");
            // reject("왜 실패했는지 이유...");
            // resolve("안녕");
        }, 2000);
    });
    
    return promise;
}

const p = add10(0)
.then((result) => {
    console.log(result);
    return add10(result);
}).then((result) => {
    console.log(result);
    return add10(undefined);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor

//     setTimeout(() => {
//         const num = null;

//         if(typeof num === 'number') {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//         // console.log("안녕");
//         // reject("왜 실패했는지 이유...");
//         // resolve("안녕");
//     }, 2000);
// });

//then 메서드
// -> 그 후에(promise 비동기 작업이 성공했을 때만 호출 되는 함수)
// promise.then((value) =>{
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });

//catch 메서드
//비동기 작업이 실패 했을 때
// promise.catch((error) => {
//     console.log(error);
// });

//then 과 catch를 연달아 사용하는 것을 마치 체이닝하는 것 같다라고 해서 promise chaining이라고 한다.

