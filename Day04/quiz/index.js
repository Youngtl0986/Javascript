// const pizza_list = window.prompt(
//   "피자 종류를 입력해주세요 1.페페로니 피자 2.치즈 피자 3.불고기 피자"
// );
// const amount = window.prompt("구매할 피자 개수를 입력해주세요.");
// const money = window.prompt("투입한 금액을 입력해주세요.");

// if (pizza_list == 1) {
//   const pepe_price = 15000 * amount;
//   if (money >= pepe_price) {
//     window.console.log(
//       `총가격은${pepe_price}입니다, 잔돈은${money - pepe_price}입니다.`
//     );
//   } else {
//     ("잔액이 부족합니다");
//   }
// } else if (pizza_list == 2) {
//   const che_price = 13000 * amount;
//   if (money >= che_price) {
//     window.console.log(
//       `총가격은${che_price}입니다, 잔돈은${money - che_price}입니다.`
//     );
//   } else {
//     ("잔액이 부족합니다");
//   }
// } else if (pizza_list == 3) {
//   const bul_price = 16000 * amount;
//   if (money > bul_price) {
//     window.console.log(
//       `총가격은${bul_price}입니다, 잔돈은${money - bul_price}입니다.`
//     );
//   } else {
//     ("잔액이 부족합니다");
//   }
// }

const menu = [
  { name: "페페로니 피자", price: 15000 },
  { name: "치즈 피자", price: 13000 },
  { name: "불고기 피자", price: 16000 },
];

const pizza = +window.prompt("피자종류") - 1;
const amount = +window.prompt("구매 개수");
const money = +window.prompt("투입 금액");

if (money > menu[pizza].price * amount) {
  window.console.log(
    `${menu[pizza].name} ${amount}개, 잔돈 ${
      money - menu[pizza].price * amount
    }`
  );
} else {
  window.console.log("잔액이 부족합니다.");
}
