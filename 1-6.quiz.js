// 아래 `title` 변수에 할당된 문자열의 길이를 `.length`를 사용하여 구하고,
//  `titleLength` 변수에 저장한 후 콘솔에 출력해보세요.

let title = 'JavaScript Basics';
let titleLength;

titleLength = title.length;

console.log(titleLength);

//아래 fileName 변수에서 확장자(.js)를 제외한 파일 이름('myFile')만
// .slice() 메소드를 사용하여 추출하고,
//  baseName 변수에 저장하여 콘솔에 출력해보세요.

let fileName = 'myFile.js';
let baseName;

baseName = fileName.slice(0, 6); // 마지막은 포함 안되는것 주의!

console.log(baseName);

//사용자 아이디 userId가 대소문자 상관 없이 'codeit'인지 확인하는 코드를 작성해보세요.
// .toUpperCase() 메소드(또는 .toLowerCase())를 사용하여 대소문자 구분 없이 비교하고,
//  결과를 isValid 변수에 저장하여 콘솔에 출력하세요. (결과는 true 또는 false로 나와야 합니다.)

let userId = 'CoDeIt';
let isValid;

isValid = userId.toLowerCase === userId.toUpperCase; // codeit !== CODEIT이기 때문에 false

console.log(isValid);

/*
사용자가 아이디를 입력할 때 대소문자를 섞어 입력할 수 있으므로, 
비교하기 전에 .toUpperCase() (또는 .toLowerCase())를 사용하여 모두 같은 케이스로 통일해주는 것이 좋다

userId.toUpperCase()는 'CODEIT'을 반환하고, 
이 값을 우리가 원하는 아이디 'CODEIT'과 === 연산자로 비교하면 true라는 결과를 얻을 수 있다
*/
