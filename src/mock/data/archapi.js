import Mock from 'mockjs';

const LoginUsers = [
  {
    id: 1,
    account: 'admin',
    name: '管理员',
    password: 'e10adc3949ba59abbe56e057f20f883e',
    email: 'admin@zhangyue.com',
    avatar: '../../../static/images/user.png',
  }
];

const Users = [];

for (let i = 0; i < 6; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    account: Mock.Random.cname(),
    email: Mock.Random.cname(),
    name: Mock.Random.cname(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
