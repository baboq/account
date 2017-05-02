import Mock from 'mockjs';

const Groups = [];
for (let i = 0; i < 5; i ++) {
  Groups.push(Mock.mock({
    id: Mock.Random.guid(),
    group_name: "测试组"+i,
    host_count: i,
  }));
}

const Hosts = [];
for (let i = 1; i < 6; i ++) {
  Hosts.push(Mock.mock({
    host_ip: "192.168.7."+i,
    host_status: i-1
  }));
}

const Services = []
Services.push(Mock.mock({
   project: "zyfm",
   service: "zyfm_1"
}));
Services.push(Mock.mock({
   project: "zyfm",
   service: "zyfm_2"
}));
Services.push(Mock.mock({
   project: "zybook3",
   service: "zybook3_1"
}));
Services.push(Mock.mock({
   project: "zybook3",
   service: "zybook3_2"
}));

export { Groups, Hosts, Services };
