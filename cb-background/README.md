# background

可以返回指定尺寸和颜色的背景图片

部署在 CloudBase 的云函数

使用了 `@halsp/lambda`, `@halsp/router`

## 线上预览

红色

<http://env-caafniqh-1253337886.ap-shanghai.app.tcloudbase.com/background/1920/1080/ff0000>

原谅色

<http://env-caafniqh-1253337886.ap-shanghai.app.tcloudbase.com/background/1920/1080/00ff00>

蓝色

<http://env-caafniqh-1253337886.ap-shanghai.app.tcloudbase.com/background/1920/1080/0000ff>

## 本地测试

安装依赖

```sh
npm install
```

启动服务

```sh
npm run start
```

或 vscode 中直接 F5 开启断点调试

本地测试是使用 `@halsp/native` 提供的本地 http 服务，可以用于模拟云函数请求

## 部署

修改文件 `.env`，将 ENV_ID 值换为你自己的 CloudBase 环境 id

```
ENV_ID=<your_env_id>
```