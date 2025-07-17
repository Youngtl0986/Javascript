const subway = [
  { name: "일반 노선", price: 1250 },
  { name: "급행 노선", price: 2000 },
  { name: "관광 노선", price: 3000 },
];

const line = +window.prompt("지하철 노선 종류를 입력해주세요") - 1;
const age = +window.prompt("승객의 나이를 입력해주세요.");
const section = +window.prompt("탑승 구간을 입력해주세요.");

const overcharge = section <= 10 ? 0 : (section - 10) * 100;

const free = 7 >= age || age <= 65;
const stud = 8 <= age && age >= 18;
const adult = 19 <= age && age >= 64;

const short = line >= 10;
const long = line <= 11;

if (free) {
  window.console.log(`요금:0원`);
} else if (stud) {
  window.console.log(`요금${(subway[line] + overcharge) * 0.6}원`);
} else {
  window.console.log(`요금${(subway[line] + overcharge) * 1}원`);
}
