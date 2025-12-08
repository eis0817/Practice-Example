//묵시적, 암시적 형변환

console.log('123' + 100); //"123100", string;
console.log('123' - 50); // 50, number; 뺄셈 형변환o
console.log('100' * '50') // "5000", number 곱셈 형변환o
// 덧셈 빼고는 다 형변환 된다고 보면 된다. 
console. log(typeof ('100' / '10')); // 10, number


// === 일치비교   : 타입, 값 모두 비교하여 같을 때
console.log(null === undefined); // false
console.log(1 === '1'); // false
console.log(1 === true); // false

// == 동등비교   : 값만 비교 
console.log(null == undefined); // true
console.log(1 == '1'); // true
console.log(1 == true); // true
