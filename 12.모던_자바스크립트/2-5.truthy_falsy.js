// truthy
// '1';
// 1
// "false"
// -1
// {}
// []
// function () {}

if (function () {}) {
  console.log('안녕');
}

// falsy
// false;
// null;
// undefined;
// NaN;
// 0
// -0;
// 0n;
// '';

if ('') {
  console.log('hello');
}

function greet(name) {
  if (!name) {
    console.log('이름을 입력해주세요!');
    return;
  }
  console.log(`안녕하세요. ${name}님!`);
}

greet('');
greet(null);
greet(undefined);

greet('은혜');