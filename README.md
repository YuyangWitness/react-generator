## React-Generator
React生成器，2017.5.24日更新最新生成器

### 技术点
 - React 15.5.4, React-router 4.1.1, Redux 3.6.0
 - WebPack, webpack-dev-server
 - Sass
 - koa2, koa-router, koa-body
 - fetch
 - babel

### mock
[server.js]() 关于koa和koa-router的使用方法；

[test/data.js]() 是fetch对模拟数据的抓取；

如果需要进行mock Server,请先打开服务器
```she
node --harmony ./mock/server.js
```

### React-Router
[app/router]() 是4.0以上版本，所以需要`react-router-dom`。

### Redux
[app/redux]() 是关于redux的所有配置。

需要在组建内部调用需要搭配`react-redux`,具体用法在[app/containers/Home.js]() 。

