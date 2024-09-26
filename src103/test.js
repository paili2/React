// 1. 배열
//   1) 문자열
const spreadArray = [..."coffee"];

//   2) rest
const fruits = ["apple", "orange", "kiwi", "grape"];
const [first, second] = fruits; // apple, orange
// const [a, ...b] = fruits; //apple, ["orange", "kiwi", "grape"]

// ice_americano -> i a
const [ice, americano] = "ice_americano".split("_");
["ice", "americano"];
const [i] = [...ice]; //["i","c","e"]의 첫번째인 i 출력!
const [a] = [...americano]; //["a","m","e","r","i","c","a","n","o"]의 첫번째인 a출력!

//2. 오브젝트
const person = { name: "차은우", age: 28, agency: "판타지오" };
const { name, ...other } = person; //name:차은우 other {age: 28, agency: "판타지오"}

const son = { name: "손흥민", position: "윙" };
const tottham = { club: "토트넘", number: 7 };
const korea = { nation: "대한민국", number: 10 };

const a0 = { son, tottham }; // {{name: "손흥민", position: "윙"}, { club: "토트넘", number: 7 }}
const a1 = { ...son, ...tottham }; // {name: "손흥민", position: "윙", club: "토트넘", number: 7 }
const a2 = { ...son, ...korea }; // { name: "손흥민", position: "윙", nation: "대한민국", number: 10 }

//k값과 v값이 같으면 한 단어 가능
const coffeeName = "아메리카노";
const coffeeShots = 2;

const coffee1 = {
  coffeeName,
  coffeeShots,
};
