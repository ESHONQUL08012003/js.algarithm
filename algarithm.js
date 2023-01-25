/*1.m| Berilgan son 10 dan katta bo'lsa unga 3 ni qo'shib konsolga chiqaring.
 Agar 10 dan kichik bo'lsa 2ga ko'paytirib natijani konsolga chiqaring.
 Agar 10 ga teng bo'lsa 22 sonini konsolga chiqaring.*/

//  function name(param) {
//   if(param>10){
//     console.log(param+3)
//   }else if(param<10){
//     console.log(param*2)
//   }else if(param==10){
//     console.log(22);
//   }
//  }
//  name(15)

/*2.m| Berilgan a sonini 3ga bo'lgandagi butun  qismini b 
o'zgaruvchigajoylang va b sonini konsolga chiqaring.*/

// let a = 17;
// let b = console.log(Math.floor(a/3));

/* 3.m a soni berilgan. a sonini 3ga bo'lgandagi
 qoldig'ini kansolga chiqaring. */

//  let a =17;
//  let b = a%3
//  console.log(b);

/*4.m| Sonning  juft  yoki  toqligini  aniqlang.  Agar
juft bo'lsa 'juft' so'zini return qiling.
Agar toq bo'lsa 'toq' so'zini return qiling. */

// function name(param) {
//   if (param % 2 == 0) {
//     console.log("juft");
//   } else {
//     console.log("toq");
//   }
// }
// name(24);

/*5.m|a va b sonlari berilgan.  Berilgan ikkita
 sondan kattasini konsolga chiqaring. Agar ular
  teng bo'lsa 'Voy ular teng' yozuvi chiqsin. */

// let a = 15;
// let b = 12;

// if(a>b){
//   console.log(a)
// }else if(a<b){
//   console.log(b)
// }else{
//   console.log("voy bular teng ekan");
// }

/*6.m| a, b, c  sonlari berilgan.  Shu sonlardan eng kattasini toping.  */

// let a = 4;
// let b = 9;
// let c = 7;

// let maxNum = Math.max(a,b,c)
// console.log(maxNum);

// if (a > b) {
//   if (a > c) {
//     console.log("a max son");
//   }
// } else if (b > c) {
//   if (b > a) {
//     console.log("b max son");
//   }
// } else if (c > a) {
//   if (c > b) {
//     console.log("c max son");
//   }
// }

/*7.m  a soni berilgan. Sonning musbat yoki manfiy ekanligini
 aniqlang. Son 0 ga teng bo'lsa, 0 ni konsolga chiqaring. */

// let a = 13;

// if (a > 0) {
//   console.log("Musbat");
// } else if(a<0) {
//   console.log("Manfiy");
// }else{
//   console.log("0 ga teng")
// }

/*8.m| a soni berilgan. Berilgan son 5 ga bo'linadimi? Agar bo'linsa
  konsolga true bo'lmasa false chiqaring..m| */

// let a = 15;

// if (a % 5 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/*9.m  Berilgan son 3 va 4 ga bo'linadimi? Agar bo'linsa konsolga
 'true'  bo'lmasa falseni chiqaring. */

// let a = 12;

// if (a % 12 == 0) {
//   console.log(true)
// } else {
//   console.log(false);
// }

// if (a % 4 == 0 && a % 3 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/*10.m|Berilgan yill kabisa yili ekanligini aniqlang.
 Agar kabisa yili bo'lsa true  konsolga chiqsin.
   Agar bo'linmasa false  konsolga chiqsin.
Kabisa yil deb 4 yilda birmarta keladigan yilga aytiladi.
 Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili
  fevral oyida 29 kun bo'ladi. */

// let year = 2012;

// if(year%4==0 && !year%100==0 || year%400==0){
//   console.log("berilgan yil kabisa yili")
// }else{
//   console.log("berilga yil kabisa yili emas")
// }

/*11.m|c char berilgan. Berilgan  char alfavit  yoki raqam ekanligini aniqlang.
   Agar alfavit bo'lsa 'alpha' ni  konsolga chiqaring,  agar son bo'lsa 'son' ni  
   konsolga chiqaring. */

//  let char = 9

//  if(char>=0 && char<=9){
//       console.log("Alfa");
//  }else{
//   console.log(char);
//  }

/*12.|c char berilgan. Berilgan  char katta 
  alfavit yoki kichik alfavit ekanlini aniqlang .
Agar alfavit kichik bo'lsa 'lowerCase' so'zini 
konsolga chiqaring,  Agar alfavit katta bo'lsa 'upperCase' ni chiqaring, 
 agar alfavit  bo'lmasa  'none' ni  chiqaring. */

// let char = "r";

// if (char >="a" && char <= "z") {
//   console.log("lowerCase");
// } else if (char >= "A" && char <= char) {
//   console.log("upperCase");
// }

/*13.m|Berilgan son hafta kunining qaysi kuniga to'g'ri keladi .
Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring, 
Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz .., 
Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin. */

// function wenthday(params) {
//   if (params == 1) {
//     console.log("Dushanba");
//   } else if (params == 2) {
//     console.log("Seshanba");
//   } else if (params == 3) {
//     console.log("Chorshanba");
//   } else if (params == 4) {
//     console.log("Payshanba");
//   } else if (params == 5) {
//     console.log("Junba");
//   } else if (params == 6) {
//     console.log("Shanba");
//   } else if (params == 7) {
//     console.log("Yakshanab");
//   }else{
//     console.log("none");
//   }
// }

// wenthday(6)

// function renameDigits(arr) {
//   let res = [];
//   let str = "";
//   const obj = {
//     1: "0",
//     0: "1",
//   };
//   for (let i = 0; i < arr.length; i++) {
//     for (let x = 0; x < arr[i].length; x++) {
//       str += obj[arr[i][x]];
//     }
//     res.push(str);
//     str = "";
//   }
//   return res;
// }
// console.log(renameDigits(["0101", "01001", "010011"]));

// let arr = ["0101", "01001", "010011"];
// let res = [];
// let str = "";

// const obj = {
//   1: "0",
//   0: "1",
// };
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     str += obj[arr[i][j]];
//   }
//   res.push(str);
//   str = "";
// }
// console.log(res);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += "  ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "* ";

//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;

// let str = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     str += "*";
//   }

//   str += "\n"
// }

// console.log(str);
