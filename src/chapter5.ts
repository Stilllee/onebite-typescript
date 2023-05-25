// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정한",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};
const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반유저
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1);