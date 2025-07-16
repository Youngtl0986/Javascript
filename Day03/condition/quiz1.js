const num = +window.prompt("각도를 입력해주세요.");

if (num > 0 && num < 90) {
  window.console.log("예각 입니다!");
} else if (num == 90) {
  window.console.log("직각 입니다!");
} else if (num > 90 && num < 180) {
  window.console.log("평각 입니다!");
} else if (num == 180) {
  window.console.log("둔각 입니다!");
} else {
  window.console.log("다시 입력해주세여");
}

const korea = +window.prompt("국어 점수를 입력해주세요!");
const eng = +window.prompt("영어 점수를 입력해주세요!");
const math = +window.prompt("수학 점수를 입력해주세요!");
const total = (korea + eng + math) / 3;
const has100 = korea == 100 || eng == 100 || math == 100;
const has_under_60_oneofthem = korea <= 60 || eng <= 60 || math <= 60;

if (total > 90) {
  window.console.log("A등급 입니다!");
} else if (total >= 80) {
  window.console.log("B등급 입니다!");
} else {
  window.console.log("C등급 입니다!");
}

if (has100) {
  window.console.log("Good!");
}

if (has_under_60_oneofthem) {
  window.console.log("Bad!");
}

const drink = +window.prompt(
  "음료의 종류를 입력해주세요(1:아메리카노(3000원)2:래몬에이드(4000원)3:카페라떼(3500원))!."
);
const amount = +window.prompt("구매할 음료 개수 를 입력해주세요!.");
const money = +window.prompt("투입한 금액(단위:원)을 입력해주세요!.");

if (drink == 1) {
  //아메리카노 3000
  const ame_price = 3000 * amount;
  if (money > ame_price ){
    window.console.log(`아메리카노${amount}개, 잔돈${money - lemon_price}`);
  }

} else if (drink == 2) {
  //레몬 4000
} else if (drink == 3) {
  //라떼 3000
} else
const ame = num1 * 3000;
const remon = num1 * 2000;
const cafe = num1 * 3000;

if (num1) {
  window.console.log("");
} else if (num == 90) {
  window.console.log("직각 입니다!");
} else if (num > 90 && num < 180) {
  window.console.log("둔각 입니다!");
} else if (num == 180) {
  window.console.log("평각 입니다!");
} else {
  window.console.log("다시 입력해주세여");
}
