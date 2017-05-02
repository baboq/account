#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
server
~~~~~~~~~~~~

服务入口路由

:copyright: (c) 2017 zhangyue
:authors: wanglichao
:version: 1.0 of 2017-04-14

"""
import os
import logging
import tornado.web
from tornado import gen
import tornado.httpserver
import tornado.ioloop
from tornado.options import define, options
# for mock
import mock

define("port", default=8080, help="run on this port", type=int)
define("prefork", default=0, help="prefork process number", type=int)
define("debug", default=True, help="enable debug mode")


class IndexHandler(tornado.web.RequestHandler):
    """程序执行入口
    """

    @gen.coroutine
    def get(self):
        '''入口
        '''
        self.render("index.html")


class BackendHandler(tornado.web.RequestHandler):
    """转发到后端服务
    """

    @gen.coroutine
    def get(self):
        '''后端服务统一转发逻辑
        '''
        pass


class Application(tornado.web.Application):
    """应用程序启动初始化
    """
    debug = False

    def __init__(self, debug=False):
        current_dirname = os.path.dirname(__file__)
        self.debug = debug
        handlers = self.init_handler()
        tornado.web.Application.__init__(
            self,
            handlers,
            xsrf_cookies=False,
            site_title="掌阅服务管理平台",
            debug=debug,
            static_path=os.path.join(current_dirname, "../dist/static"),
            template_path=os.path.join(current_dirname, "../dist"),
            login_url="/login", )

    def init_handler(self):
        """初始化handler配置
        """
        return [
            (r'/', IndexHandler),
            (r'/backend', BackendHandler),
            (r'/login', mock.LoginHandler),
            (r'/user/listpage', mock.UserListHandler),
            (r'/zymanager/groups', mock.GroupListHandler),
        ]


def main(debug=False, prefork=0, port=4455):
    """主程序入口
    """
    app = Application(debug=debug)
    http_server = tornado.httpserver.HTTPServer(app, xheaders=True)
    if prefork > 0:
        http_server.bind(port)
        http_server.start(prefork)
    else:
        http_server.listen(port)
    logging.info("start listen port=%s", port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == '__main__':
    tornado.options.parse_command_line()
    main(options.debug, options.prefork, options.port)
