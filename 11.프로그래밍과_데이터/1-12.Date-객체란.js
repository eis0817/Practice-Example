// Date

const now = new Date();
console.log(now);

// 밀리(ms)초로 생성,  1초/1000
const date1 = new Date(1000); // 1000ms -> 1초
console.log(date1);

// 문자열로 생성
const date2 = new Date('2025-12-09'); // 날짜만 지정하는 방식
const date3 = new Date('2025-12-09T16:29:00'); // 날짜와 시간을 모두 지정하는 방식

console.log(date2);
console.log(date3);

// 숫자 여러 개로 생성
const date4 = new Date(2025, 0, 15, 14, 30, 45);
const date5 = new Date(2025, 2, 15);
const date6 = new Date(2025, 2);

console.log(date4);
console.log(date5);
console.log(date6);

// Date 객체 메소드
const myBirthDay = new Date(2000, 5, 15);
console.log(myBirthDay.getTime()); // ms 표현한 것

const time = myBirthDay.getTime();
// console.log(time / 1000 / 60 / 60 / 24);

// 시간 차이
const startDate = new Date(2025, 0, 1);
const endDate = new Date(2025, 11, 31);

const timeDiff = endDate.getTime() - startDate.getTime();

console.log(timeDiff + 'ms');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');