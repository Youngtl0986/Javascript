//일반 함수[구문법]
function plus100(x){
    return x + 100;
};

//화살표 함수[신문법]
const plus100 = (x) => {
    return x + 100;
};

//1. x를 주면 두배 돌려주는 화살표 함수
const x2 = (x) => {
    return x * 2;
};



//2. x를 주면 -500 해서 돌려주는 화살표 함수
const min500 = (x) => {
    return x - 500;
};





//3. Str를 주면 길이를 돌려주는 화살표 함수
const quiz4 = (str) => {
    return  str.length;
};






//4. x,y를 주면 더 큰 숫자를 돌려주는 화살표 함수
const big = (x,y) =>{
    return x > y ? x : y;
};







//5. str를 주면 문자의 길이가 10글자 보다 크면 길이가 길어요!
//아니면 길이가 적당해요를 돌려주는 화살표 함수

const long = (str) => {
    return str.length > 10 ? "길이가 길어요!" : "길이가 적당해요!";

};


//6. str를 주면, str을 하다니 럭키비키잖아를 돌려주는 화살표 함수
const quiz5 = (str) =>{
    return `${str}를 하다니 럭키비키잖아`
}









//7. x,y를 주면, x의 y제곱을 돌려주는 화살표 함수
const quiz6 = (x, y) => {
    return x ** y;
};


//8 x,y를 주었을 때,  두 수의 차를 돌려주는 화살표 함수
const quiz8 = (x, y) => {
    return x - y;
};






//9. str를 주었을 때, a or b 가 포함하면 a,b를 포함! 아니면 a,b 미포함!
const quiz9 = (str) => {
    if(str.includes("a") || str.includes("b"))
    return "a,b를 포함" ;
    else{
    return "a,b를 미포함"}
    
 "a,b 미포함"
};





//10. x를 주었을 때, x의 배수를 리스트(array)로 돌려주는 함수
//ex) 5 -> [5,10,15,.....,45]
const quiz10 = (x) =>{
    return [x * 1,x * 2,x * 3,x * 4,x * 5,x * 6,x * 7,x * 8,x * 9],
}








//11. str,x를 주었을 때, str의 0번째 부터 x번째까지의 문자열을 돌려주는 함수
//ex) apple, 3 -> appl
const quiz11 = (str, x) =>{
    return str.slice(0, x +1)};