/*1.m  */

function findWordIndexChar(str) {
  let obj = {};
  for (const index in str) {
    if (!obj[str[index]]) {
      obj[str[index]] = [index];
    } else {
      obj[str[index]].push(index);
    }
  }
  console.log(obj);
}

findWordIndexChar("heeelllooo");
