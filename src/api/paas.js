import axios from 'axios';

let base = '';

export const getDockerGroups = params => { return axios.get(`${base}/zymanager/groups`, { params: params }); };
export const getGroupHosts = params => { return axios.get(`${base}/zymanager/group/hosts`, { params: params }); };
export const getHostServices = params => { return axios.get(`${base}/zymanager/group/host/services`, { params: params }); };
export const getMenus = params => { return axios.get(`${base}/sys/menus`, { params: params }); };
