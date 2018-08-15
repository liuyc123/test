var router = require('koa-router')();
var tools = require('../../model/tools.js');
var DB = require('../../model/db.js');
router.get('/',async(ctx)=>{
	//ctx.body="后台登录"
	await ctx.render('admin/login');
})

router.post('/doLogin',async(ctx)=>{
	let username = ctx.request.body.username;
	let password = ctx.request.body.password;

	var result = await DB.find('admin',{"username":username,"password":tools.md5(password)});
	console.log(ctx);
	if(result.length>0){
		//console.log("成功");
		console.log(result);
		ctx.session.userinfo=result[0];

		ctx.redirect(ctx.state.__HOST__+'/admin');
	}else{
		console.log("失败");
	}
})


module.exports=router.routes();