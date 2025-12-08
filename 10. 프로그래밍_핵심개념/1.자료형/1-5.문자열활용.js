const text = 'hello world'; //문자열
//길이
console.log(text.length); // 11

// 문자열의 일부를 잘라내기
const myStatus = 'Hello, World!';
//0번부터 5번까지 , 5번은 포함 안됨
console.log(text.slice(0, 5)); // hello

// type (start?: number | undefined, end?: number | undefined): string
// | 또는, undefined,?< 값이 없어도 된다는 뜻

console.log(text.slice(6)); //6번째까지 자르고, 나머지가 나옴. //world


//대소문자 바꾸기 
console.log(text.toLowerCase()); //소문자로
console.log(text.toUpperCase()); //대문자로

// 특정 글자 찾기
// type () => boolean
// type () => number

// type (searchString: string, position?: number | undefined): boolean
console.log(text.includes('hello')); // true
console.log(text.includes('bye')); // false

console.log(text.indexOf('hello')); // 0 // 매칭되는 순간의 첫번째 index값을 반환
console.log(text.indexOf('bye')); // -1 // 매칭되는 단어가 없음