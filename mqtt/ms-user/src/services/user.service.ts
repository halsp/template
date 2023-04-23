const userList = [
  {
    id: 1,
    email: "test1@hal.wang",
    password: "123456",
  },
  {
    id: 2,
    email: "test2@hal.wang",
    password: "123456",
  },
  {
    id: 3,
    email: "test3@hal.wang",
    password: "123456",
  },
];

export class UserService {
  public getUserInfo(email: string, password: string) {
    const userInfo = userList.filter(
      (u) => u.email == email && u.password == password
    )[0];
    if (userInfo) {
      return {
        id: userInfo.id,
        email: userInfo.email,
      };
    }
  }
}
