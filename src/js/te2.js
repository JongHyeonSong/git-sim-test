let a1 = null;
// let a2 = undefined;
// let a3 = "";
// let a4 = 0;

// console.log(a1 && 33);

function data1() {
  console.log(1);
  //
}

function data2() {
  console.log(2);

  //
}
// Longhand
var data3 = "1";
if (data3 == 1) {
  data1();
} else {
  data2();
} //data1

// Shorthand
(data3 === 1 ? data1 : data2)(); //data1

console.log(+1);

const testdata = [1, 2, 3];
const values = [4, 5, 6, ...testdata];

const re = ~~~~1.9 === 1; // true
console.log(~1);
console.log(~2);
console.log(~~-1.5);
