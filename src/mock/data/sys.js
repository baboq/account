import Mock from 'mockjs';

const Menus = [
    {
        path: '/',
        name: '监控面板',
        iconCls: 'fa fa-home',
        leaf: true,
        children: [
            { path: '/dashboard', name: '仪表盘' },
        ]
    },
    {
        path: '/',
        name: '配置管理',
        iconCls: 'el-icon-menu',
        leaf: false,
        children: [
            { path: '/zynode', name: '配置中心' },
            { path: '/snapshot', name: '快照中心' },
            { path: '/feedback', name: 'feedback管理' },
        ]
    },
    {
        path: '/pass',
        name: 'PAAS平台',
        iconCls: 'el-icon-menu',
        leaf: false,
        children: [
            { path: '/paas/groups', name: '研发组信息' },
            { path: '/paas/containers', name: '容器管理' },
            { path: '/paas/images', name: '镜像管理' },
            { path: '/paas/registry', name: '仓库管理' },
        ]
    },
];


export {
    Menus
};
