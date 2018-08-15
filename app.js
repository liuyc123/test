var Koa = 		require('koa');

var router = 	require('koa-router')();

var path = 		require('path');

var render = 	require('koa-art-template');

var render = 	require('koa-art-template');

var static = 	require('koa-static');

var session = 	require('koa-session');

var bodyParser = require('koa-bodyparser');

var app = new Koa();

app.use(bodyParser());

app.keys = ['some secret hurr'];
const CONFIG = {
	key:'koa:sess',
	maxAge:864000,
	overwrite:true,
	httpOnly:true,
	signed:true,
	rolling:true,
	renew:false
}
app.use(session(CONFIG,app));

app.use(static(__dirname+'/public'));


render(app,{
	root:path.join(__dirname,'views'),
	extname:'.html',
	debut:process.env.NODE_ENV !=='production'
});




var index =require('./routes/index.js');
var api =require('./routes/api.js');
var admin =require('./routes/admin.js');



router.use('/admin',admin);
router.use('/api',api);
router.use(index);



app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000)