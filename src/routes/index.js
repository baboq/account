// for all routes entrypoint
import login from './login';
import notfound from './notfound';
import home from './home';
import admin from './admin';
import config_manager from './config_manager';
import paas from './paas';
import error from './error';

//所有的routes必须在error的前面
let routes = [
  login,
  notfound,
  home,
  admin,
  config_manager,
  paas,
  error,
];

export default routes;
