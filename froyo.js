//write a prompt
let froyo = prompt("Enter your froyo flavors");
console.log(froyo);

//splitting the incoming text string
let flavors = froyo.split(",");
console.log(flavors);

// let arr = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];

let obj = {};
for (let flavor of flavors) {
  flavor in obj ? (obj[flavor] = obj[flavor] + 1) : (obj[flavor] = 1);
}
console.table(obj);

// for (let i = 0; i < flavors.length; i++) {
//   let flavor = flavors[i].trim();
//   //   console.log(i, flavors);
//   if (Object[flavor] === undefined) {
//     Object[flavor] = 1;
//   } else {
//     Object[flavor] += 1;
//   }
// }
// console.table(Object);
