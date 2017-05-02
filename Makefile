#! SHELL=/bin/sh
# archdash

THIS_MAKEFILE_PATH := $(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_DIR := $(shell cd $(dir $(THIS_MAKEFILE_PATH));pwd)

PYTHON_BIN := $(shell which python3)
PIP_BIN := $(shell which pip3)
NPM := $(shell which cnpm)

install:
	@echo "安装js依赖包"
	$(NPM) install
	@echo "安装python依赖"
	$(PIP_BIN) install -r requirements.txt -i http://192.168.6.92:3141/ --trusted-host 192.168.6.92

install_js:
	@echo "安装js依赖包"
	$(NPM) install

dev:
	@echo "运行开发环境"
	$(NPM) run dev

build:
	@echo "开始构建"
	$(NPM) run build

start: build
	@echo "启动服务"
	$(PYTHON_BIN) backend/server.py

.PHONY: build dev
