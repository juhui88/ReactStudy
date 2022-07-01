import Router from 'koa-router';
import posts from './posts';

const api = new Router();

/*api.get("/test", ctx => {
    ctx.body = "text 성공";
})*/

api.use("/posts", posts.routes());

//라우터를 내보냄
export default api;