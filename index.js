console.log('bobbyhadz.com');

const condition = 5 + 5 === 10;

if (condition) {
  import('./another-file.js').then(myModule => {
    console.log('myModule: ', myModule);

    console.log(myModule.sum(5, 5)); // 👉️ 10
    console.log(myModule.multiply(5, 5)); // 👉️ 25
    console.log(myModule.default('bobby hadz')); // hello bobby hadz
  });
}
