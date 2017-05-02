// archapi相关相关api操作封装
import axios from 'axios';
import apiConfig from './api_config';

const archapiServer = "";
const archapiPrefix = "archapi";

// params: 参数用于http过滤条件

export const doLogin = params => {
      return axios.post(`${archapiServer}/login`, params).then(res => res.data);
};

export const addUser = params => {
      return axios.post(`${archapiServer}/${archapiPrefix}/user/create`, params)
          .then(res => res.data);
};

export const getUser = (userid, params) => {
      return axios.get(`${archapiServer}/${archapiPrefix}/${userid}`, params)
          .then(res => res.data);
};

export const updateUser = params => {
      return axios.post(`${archapiServer}/${archapiPrefix}/${userid}`, params)
          .then(res => res.data);
};

export const deleteUser = params => {
      return axios.delete(`${archapiServer}/${archapiPrefix}/${userid}`, params)
          .then(res => res.data);
};

export const batchDeleteUser = params => {
      return axios
          .delete(`${archapiServer}/${archapiPrefix}/user/batch/delete`, params)
          .then(res => res.data);
};

export const getUserList = params => {
      return axios.get(`${archapiServer}/${archapiPrefix}/user/list`, params)
          .then(res => res.data);
};

export const getUserListPage = params => {
  return axios.get(`${archapiServer}/${archapiPrefix}/user/list/page`, params)
      .then(res => res.data);
};
