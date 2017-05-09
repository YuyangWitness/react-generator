var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', function (ctx, next) {
    ctx.body = 'hello world'
});

router.get('/api/1', async  function (ctx, next) {
    ctx.body = 'hello world'
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
