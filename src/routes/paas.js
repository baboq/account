import Groups from '../views/paas/groups.vue';
import Hosts from '../views/paas/hosts.vue';
import Services from '../views/paas/services.vue';
import Home from '../views/home.vue';

export default {
        path: '/paas',
        component: Home,
        name: 'PAAS平台',
        children: [
            { path: '/paas/groups', component: Groups, name: '研发组列表' },
            { path: '/paas/hosts', component: Hosts, name: '服务器列表' },
            { path: '/paas/host/services', component: Services, name: '服务列表'},
        ]
}
