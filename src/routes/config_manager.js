import Table from '../views/config_manager/table.vue';
import User from '../views/config_manager/user.vue';
import Home from '../views/home.vue';

export default {
    path: '/',
    component: Home,
    name: '配置管理',
    iconCls: 'el-icon-menu',
    children: [{
        path: '/zynode',
        component: Table,
        name: '配置中心'
    }, {
        path: '/snapshot',
        component: Table,
        name: '快照中心'
    }, {
        path: '/feedback',
        component: User,
        name: 'feedback管理'
    }, ]
};
