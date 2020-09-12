const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const userRouter = new Router({ prefix: '/users'});
router.get('/', async (ctx,next) => {
    ctx.body = '这是主页'
})
userRouter.get('/',(ctx,next) => {
    ctx.body = '这是用户列表'
})
userRouter.post('/',(ctx) => {
    ctx.body = '创建用户列表'
})
userRouter.get('/:id',(ctx) => {
    ctx.body = `这是用户${ctx.params.id}`;
});
app.use(router.routes());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.listen(3000);