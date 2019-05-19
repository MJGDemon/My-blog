const exp = require('express')
const express = exp()
const renderer = require('vue-server-renderer').createRenderer()
const fs = require('fs')
const createApp = require('./dist/bundle.server.js')['default']
const DB = require('./better-sqlite3')

const bodyParser = require('body-parser')
const session =require('express-session');
express.use(bodyParser.json());
express.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized: true,
    cookie:{
        maxAge:1000*60*5
    }
}))
const db = new DB('data.db');

// 设置静态文件目录
express.use('/', exp.static(__dirname + '/dist'))


// 客户端打包地址
const clientBundleFileUrl = '/bundle.client.js'


express.get('/getInfo',(req,res) => {
    var artical = db.findAll('artical');
    res.send(artical);
})

express.get('/content*',(req,res) => {
    url = req.url.slice(9);
    fs.readFile(`./dist/markdown/${decodeURI(url)}.md`,(err,data) => {
        if(err)
            res.status(400).send('error')
        else
            res.send(data);
    })
})

express.get('/getAbout',(req,res) => {
    fs.readFile('./dist/markdown/about.md',(err,data) => {
        if(err)
            res.status(500).send('500')
        else
            res.send(data);
    })
})

express.get('/favicon.ico',(req,res) => {
    res.sendFile('./public/logo.ico',{root:__dirname});
})

express.get('/admin',(req,res,next) => {
    if(!req.session.Username)
        res.redirect('/login')
    else
        next()
})

express.post('/login/admin/',(req,res) => {
    var data = req.body;
    if(data.Username == 'Demon' && data.Password == 'syj000603'){
        req.session.Username = data.Username;
        res.send('OK')
        // res.status(302).send('/admin')
    }else{
        res.status(400).send('用户名或密码不正确')
    }
})


// 响应路由请求
express.get('*', (req, res) => {
    const context = { url: req.url }
    // 创建vue实例，传入请求路由信息
    createApp(context).then(app => {
        let state = JSON.stringify(context.state)
        renderer.renderToString(app, (err, html) => {
            if (err) { 
                return res.redirect('/404') 
            }
            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>   
                        <meta charset="UTF-8">
                        <title>Demon's blog</title>
                        <script>window.__INITIAL_STATE__ = ${state}</script>
                        <script src="${clientBundleFileUrl}"></script>
                    </head>
                    <body>
                        <div id="app">${html}</div>
                    </body>
                </html>
            `)
        })
    }, err => {
        if(err.code === 404) { 
            // res.status(404).end('404 NotFound')
            res.redirect('/404')
        }
    })
})



// 服务器监听地址
express.listen(8080, () => {
    console.log('服务器已启动！')
})