# -*- coding: utf-8 -*-
"""
mock
~~~~~~~~~~~~

伪装服务端请求路由规则

:copyright: (c) 2016 zhangyue
:authors: wanglichao
:version: 1.0 of 2017-04-17

"""
import logging
import json
from tornado import gen
import tornado.web


class LoginHandler(tornado.web.RequestHandler):
    """登录
    """

    @gen.coroutine
    def post(self):
        '''登录
        '''
        logging.info("GitLab webhook data:%s", self.request.body)
        data = json.loads(self.request.body.decode())
        username = data["username"]
        password = data["password"]
        logging.info("start username=%s, password=%s"%(username, password))
        if username == 'admin' and password == 'e10adc3949ba59abbe56e057f20f883e':
            # login_user = {
            #     "id": 1,
            #     "username": "admin",
            #     "password": "123456",
            #     "avatar": "https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",
            #     "name": "王利超",
            # }
            login_user = {
                "code": 200,
                "msg": '请求成功',
                "user": "admin",
                "name":"王利超"
            }
        elif username == 'root' and password == '111111':
            # login_user = {
            #     "id": 2,
            #     "username": "root",
            #     "password": "111111",
            #     "avatar": "https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",
            #     "name": "白江涛",
            # }
            login_user = {
                "code": 200,
                "msg": '请求成功',
                "user": "root",
                "name":"白江涛"
            }
        else:
            login_user = {
                "code": 500,
                "msg": '账号或密码错误',
                "user": "",
                "name":""
            }
        logging.info("start login_user=%s", login_user)
        self.write(json.dumps(login_user))



class UserListHandler(tornado.web.RequestHandler):
    """名字列表
    """

    @gen.coroutine
    def get(self, page=None, name=None):
        '''名字列表
        '''
        logging.info("UserListHandler page")
        # logging.info("UserListHandler page:%s", self.page)
        # logging.info("UserListHandler page:%s", self.name)
        users = [
            {
                "id":1,
                "name":"白江涛",
                "age":"26",
                "sex":1,
                "birth":"1990-11-12",
                "addr":"陕西省延安市延长县",
                "dept":"技术架构组",
                "starttime":"2016.10.24"
            },
            {
                "id":2,
                "name":"王利超",
                "age":"27",
                "sex":1,
                "birth":"1989-10-01",
                "addr":"河北省石家庄市",
                "dept":"运营研发组",
                "starttime":"2014.10.24"
            },
            {
                "id":3,
                "name":"戚磊",
                "age":"26",
                "sex":0,
                "birth":"1990-10-03",
                "addr":"安徽省黄山市",
                "dept":"总经办",
                "starttime":"2012.09.24"
            },
        ]
        data = {"total":3, "users":users}
        logging.info("UserListHandler users =%s", data)
        self.write(json.dumps(data))

class GroupListHandler(tornado.web.RequestHandler):
    """研发组列表
    """

    @gen.coroutine
    def get(self, page=None, name=None):
        '''名字列表
        '''
        logging.info("zyamanger group list")
        groups = [
            {
                "id":1,
                "group_name":"书城研发组",
            },
            {
                "id":2,
                "group_name":"运营研发组",
            },
            {
                "id":3,
                "group_name":"用户研发组",
            },
        ]
        data = {"total":3, "groups":groups}
        self.write(json.dumps(data))
