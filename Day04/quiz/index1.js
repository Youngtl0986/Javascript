const bus_amount = [
  { name: "1.시내버스", price: 1200 },
  { name: "2.광역버스", price: 2000 },
  { name: "3.마을버스", price: 1000 },
];

const bus = +window.prompt("버스 노선의 종류를 입력해주세요.") - 1;
const age = +window.prompt("승객의 나이를 입력해주세요.");

if (age <= 7) {
  window.console.log(`${bus_amount[bus].name}요금: 무료`);
} else if (8 <= age && age <= 19) {
  window.console.log(
    `${bus_amount[bus].name}요금: ${bus_amount[bus].price * 0.7}원.`
  );
} else if (20 <= age && age <= 64) {
  window.console.log(
    `${bus_amount[bus].name}요금: ${bus_amount[bus].price}원.`
  );
} else {
  window.console.log(`${bus_amount[bus].name}요금: 무료`);
}
