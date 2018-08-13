var router = require('koa-router')();

router.get('/',async(ctx)=>{
	ctx.body="API接口"
})

module.exports=router.routes();