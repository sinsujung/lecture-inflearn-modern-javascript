// 1. if 조건문 (if문)
let num = 2;

if(num >= 10) {
    // console.log("num은 10 이상입니다.");
    // console.log("조건이 참 입니다.");
} else if (num >= 5) {
    // console.log("num은 5 이상입니다.");
} else if(num >= 3) {
    // console.log("num은 3 이상입니다.");
} else {
    // console.log("조건이 거짓 입니다.");
}

// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다.
// 소괄호 안에 있는 변수의 값과 일치하는 case를 위에서부터 차례로 아래로 탐색.
// 일치하는 case를 만나게되면 그 아래에 있는 모든 코드를 다 수행시켜줌.
// 따라서 break;를 사용하여 멈춰준다.
let animal = "bear";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case "snake": {
        console.log("뱀");
        break;
    }
    case "tiger": {
        console.log("호랑이");
        break;
    } 
    default: {
        console.log("그런 동물은 전 모릅니다.");
    }
}