//object 타입
// key-value
// key는 중복 안됨 - 문자, 숫자
// value 중복 됨 - 아무타입가능
// const americano = {
//   name: "아메리카노",
//   price: 2000,
//   isIce: true,
//   hasShot: true,
// };
// //dot. 연산자
// window.console.log(americano.name);
// window.console.log(americano.price);
// window.console.log(americano.hasShot);
// // bracket[] 연산자
// window.console.log(americano["name"]);
// window.console.log(americano["price"]);
// window.console.log(americano["hasShot"]);

//보드게임 오브젝트 타입 변수를 만들기
// 이름은 할리갈리, 플레이어수 4, 소요시간 10분

// const game = {
//   name: "할리갈리",
//   player: 4,
//   time: "10분",
// };

// window.console.log(game.name);
// window.console.log(game.player);
// window.console.log(game.time);

const member = {
  name: "장영국",
  age: 30,
  eyes: {
    left: 1.2,
    right: 1.5,
  },
};
window.console.log(member);
window.console.log(member.name);
window.console.log(member.age);
window.console.log(member.eyes);
window.console.log(member["eyes"]["right"]);

//없는 key를 요청하면 undefined
window.console.log(member.living);

member.living = "김포";

window.console.log(member.living);

member.living = "파주"; //파주로 바뀜

window.console.log(member.living);

//const, if, delete []
delete member.name;
window.console.log;
