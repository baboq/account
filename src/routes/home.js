import Home from '../views/home.vue';
import DashBoard from '../views/dashboard/dashboard.vue';

export default {
    path: '/',
    name: '监控面板',
    iconCls: 'fa fa-home',
    component: Home,
    leaf: true,
    children: [{
        path: '/dashboard',
        component: DashBoard,
        name: '仪表盘'
    }, ],
};
