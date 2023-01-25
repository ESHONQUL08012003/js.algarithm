/*1.m|Quyidagi yig'indini hisoblovchi dastur yozing.
(1 + 1/2 + 1/3 + 1/4 ..... 1/n ). */

// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += 1 / i;
// }
// console.log(sum);

/*2.m|n soni berilgan.

Geometrik shaklni ekranga chiqaring.
 *****
 *****
 *****
 *****
 *****
 */

// let n = 5;
// let res = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 1; j < n; j++) {
//     res += "*";
//   }

//   res += "\n";
// }
// console.log(res);

/*3.m|n soni berilgan.
Geometrik shakilni ekranga chiqaring.
   (0,0) (0,1) (0,2) ........... (0,9)
    (1,0) (1,1) (1,2) ........... (1,9)
                               ...........
                               ..........
                               ..........
    (9,0) (9,1) (9,2) ........... (9,9) 
 */

// let n = 9;

// let sum = "";

// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= n; j++) {
//     sum += `(${i}, ${j})`;
//   }
// }
// console.log(sum);

let a = 5;
// let b = a++;
// let c = ++a;
// console.log(a);
// console.log(b);
// console.log(c);

console.log(a);





let A = 5;
let B = 4;
let C = 3;

if (A > B && B > C) {
  console.log(true);
} else {
  console.log(false);
}
