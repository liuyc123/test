var router = require('koa-router')();
var login = require('./admin/login.js');
var user = require('./admin/user.js');

router.use(async(ctx,next)=>{
	//await ctx.request.header.hoset;
	ctx.state.__HOST__= 'http://'+ctx.request.header.host;

	if(ctx.session.userinfo){
		await next();
	}else{
		console.log(ctx.url);
		if(ctx.url=='/admin/login' || ctx.url=='/admin/login/doLogin/'){
			await next();

		}else{
			ctx.redirect('/admin/login');
		}
	}
	
})
router.get('/',async(ctx)=>{
	//ctx.body="后台管理"
	ctx.render('admin/index');
})

router.use('/login',login);
router.use('/user',user);

module.exports=router.routes();