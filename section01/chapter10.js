for (let idx = 1; idx <= 10; idx++) {

    if(idx % 2 === 0) {
        continue; //아래 코드 거치지 않고 다음 조건식으로 바로 이동
    }
    console.log(idx);

    if (idx >= 5) {
        break;
    }
}

