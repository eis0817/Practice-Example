let menuNumber = 2;
//switch문 사용해서 작성

switch (menuNumber) {
  case 1: {
    console.log('아메리카노');
    break;
  }
  case 2: {
    console.log('카페 라떼');
    break;
  }
  case 3: {
    console.log('카푸치노');
    break;
  }

  case 4: {
    console.log('에스프레소');
    break;
  }
  default: {
    console.log('메뉴를 다시 선택해주세요.');
  }
}

// 숫자로 표현된 월 `month` 변수의 값에 따라 계절을 출력하는 `switch`문을 작성하세요. `break`문을 적절히 생략하여 '폴 스루(fall-through)'를 활용해 보세요.

// - 12, 1, 2: '겨울'
// - 3, 4, 5: '봄'
// - 6, 7, 8: '여름'
// - 9, 10, 11: '가을'
// - 그 외: '유효하지 않은 월입니다.'

let month = 4;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('겨울');
    break;
  case 3:
  case 4:
  case 5:
    console.log('봄');
    break;
  case 6:
  case 7:
  case 8:
    console.log('여름');
    break;
  case 9:
  case 10:
  case 11:
    console.log('가을');
    break;
  default:
    console.log('유효하지 않은 월입니다.');
}
