---
title: 安装包目录结构
sidebar_position: 4.5
---

## Linkis安装包解压的目录结构


下载官方发布的[编译完整包](https://linkis.apache.org/zh-CN/download/main)，解压后的目录结构如下:

```html

├── bin
│   ├── checkEnv.sh //部署环境验证脚本
│   ├── common.sh
│   └── install.sh  //执行安装的脚本
├── deploy-config
│   ├── db.sh       //数据库连接配置
│   └── linkis-env.sh //相关环境配置信息
├── DISCLAIMER
├── LICENSE
├── licenses  
├── linkis-package  //微服务相关的启动配置文件，依赖，脚本，linkis-cli等
│   ├── bin
│   ├── conf
│   ├── db
│   ├── lib
│   └── sbin
├── NOTICE
├── README_CN.md
└── README.md

```