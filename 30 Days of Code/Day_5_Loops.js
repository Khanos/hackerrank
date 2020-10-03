function main() {
  const n = 2;
  for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n*i}`);
  }
  // Another
  console.log("-----------------------------------------------------------");
  let i = 1;
  while (i <= 10) {
    console.log(`${n} x ${i} = ${n*i}`);
    i++;
  }
  i = 1;
  console.log("-----------------------------------------------------------");
  do {
    console.log(`${n} x ${i} = ${n*i}`);
    i++
  } while (i <= 10)
  // Let use arrays
  let myArr = Array(10).fill().map((x,i)=>i+1);
  console.log("-----------------------------------------------------------");
  myArr.forEach(i=>console.log(`${n} x ${i} = ${n*i}`));
  console.log("-----------------------------------------------------------");
  for (const i of myArr) {
    console.log(`${n} x ${i} = ${n*i}`);
  }
  console.log("-----------------------------------------------------------");
  myArr.map(i=>console.log(`${n} x ${i++} = ${n*i}`));

}
main();
