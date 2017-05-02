// 提供group相关的mock逻辑
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// 模拟研发组数据
import {
    Groups, Hosts, Services
} from './data/paas';

import {
    Menus
} from './data/sys';

let _Groups = Groups;
let _Hosts = Hosts;
let _Services = Services;

export default {
    bootstrap() {
        let mock = new MockAdapter(axios);
        //获取分组列表
        mock.onGet('/zymanager/groups').reply(config => {
            let {group_name} = config.params;
            let mockGroups = _Groups.filter(group => {
                if (group_name && group.group_name.indexOf(group_name) == -1) return false;
                    return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve([200, {
                        groups: mockGroups
                    }]);
                }, 1000);
            });
        });
        //获取分组机器列表
        mock.onGet('/zymanager/group/hosts').reply(config => {
            let {host_ip} = config.params;
            let mockHosts = _Hosts.filter(host => {
                if (host_ip && host.host_ip.indexOf(host_ip) == -1) return false;
                    return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        hosts: mockHosts
                    }]);
                }, 1000);
            });
        });
        //获取分组机器列表
        mock.onGet('/zymanager/group/host/services').reply(config => {
            let {project} = config.params.project;
            let {service} = config.params.service;
            let mockServices = _Services.filter(service => {
                if (project && service.project.indexOf(project) == -1) return false;
                    return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        services: mockServices
                    }]);
                }, 1000);
            });
        });

        mock.onGet('/sys/menus').reply((config) => {
            let {
                user
            } = config.params;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        menu_data: Menus
                    }]);
                }, 1000);
            });
        });
    }
};
