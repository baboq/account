import Home from '../views/home.vue';
import User from '../views/admin/user.vue';
import Role from '../views/admin/role.vue';

export default {
  path : '/',
  component : Home,
  name : '权限控制',
  iconCls : 'el-icon-setting',
  children : [
    {path : '/user', component : User, name : '用户管理'},
    {path : '/role', component : Role, name : '角色管理'},
  ],
};
