const a1 = window.prompt("한 변의 길이를 입력해주세요.");

window.console.log(
  `한 변의 길이 ${Number(a1)} 인 정사각형의 넓이:${Number(a1) * Number(a1)}`
);

const base = window.prompt("한 변의 길이를 입력해주세요.");
const height = window.prompt("높이를 입력해주세요.");

const result2 = Number(a2) * Number(b2);

window.alert(`밑변${a1} 과 높이${b2}안 정삼각형의 넓이:${result2}`);

const won = window.prompt("원화를 입력해주세요.");
const yen = Number(won) * Number(0.1072);
window.console.log(`${won}원은 ${yen}엔 입니다!`);

const a4 = window.prompt("키를 입력해주세요.");
const b4 = window.prompt("몸무게를 입력해주세요.");
const c4 = Number(a4) * Number(a4);

const result4 = Number(b4) / Number(a4);

window.alert(`키${a4} 몸무게 ${b4} BMI 지수는 ${result4}입니다.`);

const a5 = window.prompt("분단위를 입력해주세요");
const result5 = Number(a5) * Number(60);

window.alert(`${a5}분은 ${result5}초 입니다.`);
