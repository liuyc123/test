var router = require('koa-router')();


router.get('/',async(ctx)=>{
	//ctx.body="后台登录"
	await ctx.render('admin/login');
})

router.post('/doLogin',async(ctx)=>{

	//await ctx.render('admin/login');
	
})


module.exports=router.routes();