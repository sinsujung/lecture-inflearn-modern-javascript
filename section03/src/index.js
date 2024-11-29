//CJS
// const {add, sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

//esm 쓰려면 cjs는 같이 못 쓴다.

//esm
import mul, {add, sub} from "./math.js";

//dafault 함수 가져올 때
// import mul from "./math.js";
console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(2,3));

