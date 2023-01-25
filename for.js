/*1.m|a soni berilgan. 0 dan a gacha bo'lgan juft
  sonlar yig'indisini toping  va yig'indini konsolga chiqaring */

// let a = 10;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

/*2.m| a soni berilgan. 0 dan  a gacha bo'lgan toq
 sonlar yig'indisini toping  va yig'indini 
konsolga chiqaring. a sonini ham inobatga oling. */

// let a = 10;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   if (i % 2-1 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

/*3.m| a soni berilgan. 0 dan a gacha bo'lgan
 5 ga bo'linadigan sonlar yig'indisini toping va yig'indini konsolga
 chiqaring. a sonini ham inobatga oling. */

// let a = 35;
// let sum = 0;

// for (let i = 0; i <= a; i++) {
//   if (i % 5 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

/*4.m |a soni berilgan. 0 dan a gacha bo'lgan juft sonlar soni
 toping va konsolga chiqaring. a sonini inobatga olmaymiz. */

//  function functionName(num){
//     for (let i = 0; i <=num; i++) {
//       if(i%2==0){
//        console.log(i);
//       }
//     }
//  }
//  (functionName(50));

/*5.m|a va b sonlar orasidagi (butun) sonlar   yig'indisini
 toping (a sonini inobatga oling) va yig'indini konsolga chiqaring.*/

// let a = 2;
// let b = 8;
// let sum = 0;
// for (let i = a; i < b; i++) {
//   sum += i;
// }
// console.log(sum);

/*6.m|a va b sonlar orasidagi juft sonlarni sonini toping  
 (a sonini inobatga oling va natijani konsolga chiqaring. */

// let a = 2;
// let b = 8;
// let sum = 0;
// for (let i = a; i < b; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

/*7.m |a va b sonlar orasidagi 3 ga bo'linadigan sonlarni 
yig'indisi va sonini konsolga chiqaring. */

// let a = 2;
// let b = 16;
// let sum = 0;
// let son = 0
// for (let i = a; i < b; i++) {
//   if (i % 3 == 0) {
//     sum += i;
//     son +=1
//   }
// }
// console.log(son);
// console.log(sum);

/*8.m|a va b sonlar orasidagi 2 va 3 ga 
bo'linadigan sonlarning sonini  konsolga chiqaring.  */

// let a = 2;
// let b = 16;
// let sum = 0;
// for (let i = a; i < b; i++) {
//   if (i % 6 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

/*9.m|  a va b sonlari orasidagi musbat sonlar sonini toping 
 va shuni konsolga chiqaring.  b sonini ham inobatga oling.*/

// let a = -3;
// let b = 6;
// let count = 0;

// for (let i = a; i <= b; i++) {
//   if (i > 0) {
//     count +=1
//   }
// }
// console.log(count);

/*10.| Berilgan sonni 5chi darajasini hisoblash
 uchun o'sha sonni 5 marta o'ziga ko'paytiramiz. */

// let a = 5;
// let sum = 2;

// for (let i = 1; i < a; i++) {
//   sum += sum;
// }
// console.log(sum);

/*11.m | a sonini n chi darajasini hisoblaydigan dastur yozing
  va hosil bo'lgan sonni konsolga chiqaring. */

// let a = 5;
// let sum = 2;

// for (let i = 1; i < a; i++) {
//   sum += sum;
// }
// console.log(sum);

/*12.m | a , n sonlari berilgan (a soni 1-9 o'rtasida ).
Ketma ketlikni hisoblang. a + aa + aaa + ........  nta a bo'ladi.
Yig'indini konsolga chiqarish kerak.  */

// let a = 7;
// let n = 5;
// let sum = 0;
// let temp = 0;

// for (let i = 0; i < n; i++) {
//   temp = temp * 10 + a;
//   sum += temp;
// }

// console.log(sum);

/*13.m|a soni berilgan.Shu son mukammal 
raqam yoki yo'qmi shuni aniqlang. Agar mukammal
 raqam bo'lsa true bo'lmasa false konsolga chiqaring. */

// let a = 7;
// let n = 5;
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//   if (a % i == 0) {
//     if ((sum += i) == a) {
//       console.log(true);
//     }else{
//       console.log(false);
//     }
//   }
// }

/*14.m|Ketma ketlikni  berilgan   1 + 4 + 9 + 16 +  ... + n*n .
 Shu ketma ketlikning yig'indisini 
 hisoblang  va  natijani konsolga chiqaring. */

// let n = 6;
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum += i * i;
// }
// console.log(sum);

/*15.m|n soni berilgan (n  uch xonali son deb hisoblang).
Shu son Armstrong raqami hisoblanadimi yoki yo'qmi ?
Agar Armsrong raqami bo'lsa  konsolga  true bo'lmasa false chiqaring.
Armstrong raqam.  n = 153  agar (1*1*1) + (5*5*5) + (3*3*3) = 153.  */

// function isArmstrong(number) {
//   let a = "" + number;
//   let sum = 0;

//   for(let i = 0; i < a.length; i++) {
//     sum += Math.pow(a[i], 3);
//   }

//   return sum === number;
// }

// console.log(isArmstrong(153));

// function isArmstron(num) {
//   let sum = 0;

//   while (num >= 1) {
//     let x = num % 10;

//     num = Math.floor(num / 10);

//     sum += Math.pow(x, ("" + num).length);
//   }

//   console.log(sum);
// }

// isArmstron(1634);

/*16.m |n soni berilgan. Shu son tub (prime) ekanligini aniqlang.
 Agar tub bo'lsa true  bo'lmasa false konsolga chiqaring.
Tubson  1 ga va o'ziga bo'linadigan sonlar.  Masalan 7
. U 1 ga va o'ziga bo'linadi u boshqa songa bo'linmaydi.
 Uning bo'linuvchilari 2ta. */

// let n = 15;
// let count = 0;

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     count++;
//   }
// }

// if (count == 2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

/*17.m |n soni berilgan. Berilgan sonning factarialini hisoblang.
Masalan: 5 ning factoriali   1*2*3*4*5 = 120;   
Yani 1 dan o'sha songacha bo'lgan sonlarning ko'paytmasi 
uning faktarialiga teng bo'ladi.  10 ning factariali  teng bo'ladi
 1*2*3*4*5*6*7*8*9*10 = 3628800*/

// let n = 5;
// let factorial = 1;
// for (let i = 1; i <= n; i++) {
//   factorial = i * factorial;
// }
// console.log(factorial);

/*18.m|n soni berilgan. Berilgan birinchi n ta 
 fibanatchi ketma ketligining yig'indisini toping.
Masalan: fibanachi ketmaketligi:  0 1 1 2 3 5 8 13 .... 
Bunda ketma ketlikni birinchi raqami f1 = 0 , ikkinchi raqami f2 = 1.
Ketmaketlikni n chi xadi fn = f(n-1) + f(n-2) 
 formula bilan topiladi. Ya'ni  hohlagan bitta xadini topish uchun
  o'zidan bitta va o'zidan ikkita oldingi xadlari yi'gindisiga teng bo'ladi.   */

// let n = 15;

// let f_1 = 0; // birinchi xadi
// let f_2 = 1; // ikkinchi xadi
// let sum = 0;

// for (let i = 2; i < n; i++) {
//     sum = sum + f_1 + f_2;

//     let tem = f_1;

//     f_1 = f_2;
//     f_2 = f_2 + tem;
// }

// console.log(sum);

// class Animal {
//   constructor(name, eyes, tail, v) {
//     (this.name = name), (this.eyes = eyes), this.tail, (this.v = v);
//   }

//  voice (){
//   console.log("my nam");
//  }

// }

// const dog = new Animal("bars", 2, true, "vov");

// console.log(dog());

// class Char extends String {
//   constructor(char) {
//     if (char.length > 1) {
//       throw new SyntaxError("bu belgi emas");
//     }

//     super(char);
//   }
// }

// const str = new Char(12);

// console.log(str);

// class RGB {
//   constructor(R, G, B) {
//     this.R = R;
//     this.G = G;
//     this.B = B;
//   }

//   valid(...number) {
//     for (const value in number) {
//       if (value > 255 && !value.toString()) {
//         value = this.R;
//         value = this.G;
//         value = this.B;
//       }
//     }
//   }
// }

// let color = new RGB(22, 50, 80);

// console.log(color.valid(432, 111,276));

// class MYclass {

//   #name
//   surname
//   job
//   age


//   constructor(name, surname, job, age) {
//     this.#name = name;
//     this.firstName = surname;
//     this.age = age;
//     this.job = job;
//   }

//   myMethod1() {
//     console.log("Hello Eshonqul");
//   }

//   myMethod2() {
//     console.log("Bye Eshonqul");
//   }
// }

// let y = new MYclass("Eshonqul", "Abdulazizov", "Student", 20);

// console.log(y);

// y.myMethod1();
// y.myMethod2();



