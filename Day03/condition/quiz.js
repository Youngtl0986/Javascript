//유저에게 영어점수를 입력 받고
//90점 이상이면 A
//80점 이상이면 B
// 70점 이상이면 C
//60점 이상이면 D
//그외에는 F

const num = +window.prompt("점수를 입력해주세요.");

if (num > 89) {
  window.console.log("A학점 입니다!");
} else if (num > 79) {
  window.console.log("B학점 입니다!");
} else if (num > 69) {
  window.console.log("C학점 입니다!");
} else if (num > 59) {
  window.console.log("D학점 입니다!");
} else {
  window.console.log("F학점 입니다!");
}

//정수 하나 주시면 , 양의정수, 양의 짝수 , 음의 홀수 ,음의 짝수 // 또는 0을 콘솔로 출력
const num1 = +window.prompt("정수를 입력해주세요.");

if (num1 > 0 && num1 % 2 == 0) {
  window.console.log("양의 짝수 입니다!");
} else if (num1 > 0 && num1 % 2 == 1) {
  window.console.log("양의 홀수 입니다!");
} else if (num1 < 0 && num1 % 2 == 0) {
  window.console.log("음의 짝수 입니다!");
} else if (num1 < 0 && num1 % 2 == -1) {
  window.console.log("음의 홀수 입니다!");
} else {
  window.console.log("0 입니다!");
}
