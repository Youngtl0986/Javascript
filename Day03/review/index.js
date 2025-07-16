const num = +window.prompt("정수를 입력해주세요.");
const isover0 = num > 0;
const result = isover0 ? "양의 정수" : "0 또는 음의 정수";
window.console.log(result);

const height = +window.prompt("키를 입력해주세요.(cm)");
const result1 =
  height >= 140
    ? "해당 놀이기구를 탈 수 있습니다"
    : "해당 놀이기구를 탈 수 없습니다";
window.console.log(result1);

const age = +window.prompt("나이를 입력해주세요.");
const result2 = age < 20 ? "미성년자 입니다." : "성인입니다.";
window.console.log(result2);

const user_name = window.prompt("이름을 입력해주세요.");
const result3 =
  user_name == "" ? "아름을 입력해주세요." : `안녕하세요. ${user_name} 님`;
window.console.log(result3);

const num2 = +window.prompt("정수를 입력해주세요.");
const result4 = num2 % 2 == 1 ? "훌수입니다." : "짝수입니다.";
window.console.log(result4);
