const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession= require("express-session");
const cors = require("cors");
const pool = require("./pool");
const indexRouter = require("./router/indexRouter");
var app = express();
var server = http.createServer(app);
server.listen(3000);
app.use(cors({
    origin:["http://127.0.0.1"],
    credentials:true
}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(expressSession({
    resave:false,
    saveUninitialized:true,
    secret:"teducn"
}));

app.use("/index",indexRouter);
app.post("/quote",(req,res)=>{
    var pic = req.body.pic;
    var suit = req.body.suit;
    var tel = req.body.tel;
    var telReg = /^1[34578][0-9]{9}$/;
    if(!telReg.test(tel)){
        res.json({code:-1,msg:"手机号码格式不正确"});
        return;
    }
    var uname = req.body.uname;
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = "INSERT INTO user VALUES(null,?,?,?,?)";
        conn.query(sql,[pic,suit,tel,uname],(err,result)=>{
            if(err)throw err;
            if(result.affectedRows>0){
                res.json({code:1,msg:"更新成功"});
            }else{
                res.json({code:-1,msg:"更新失败"});
            }
            conn.release();
        });
    });
});
app.get("/weekShow",(req,res)=>{
    var mon = req.query.mon;
    var week = req.query.week;
    var monReg = /^[1-9]{1,2}$/;
    if(!monReg.test(mon)){
        res.json({code:-1,msg:"月份格式不正确"})
    }
    //console.log(mon,week);
    var weekReg = /^[\u4e00-\u9fa5]{1}$/;
    if(!weekReg.test(week)){
        res.json({code:-1,msg:"星期格式不正确"})
    }
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = " SELECT weekShow1,weekShow2,weekShow3,weekShow4 FROM zz_week";
        sql += " WHERE mon=? AND week=?";
        conn.query(sql,[mon,week],(err,result)=>{
            if(err)throw err;
            //console.log(result);
            res.json(result);
            conn.release();
        })
    })
});
app.get("/outerShow",(req,res)=>{
    var oid = req.query.oid;
    var oidReg = /^[0-9]{1,}$/;
    if(!oidReg.test(oid)){
        res.json({code:-1,msg:"外景作品序号格式不正确"});
        return;
    }
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = "SELECT outerShow1,outerShow2,outerShow3";
        sql += " FROM zz_outer WHERE oid=?";
        conn.query(sql,[oid],(err,result)=>{
            if(err)throw err;
            res.json(result);
        });
    })
})
app.get("/weekShowMon",(req,res)=>{
    var mon = req.query.mon;
    var monReg = /^[0-9]{1,2}$/;
    if(!monReg.test(mon)){
        res.json({code:-1,msg:"月份格式不正确"});
        return;
    }
    var output = {};
    var process = 0;
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = "SELECT mon FROM zz_week GROUP BY mon DESC";
        conn.query(sql,(err,result)=>{
            if(err)throw err;
            output.maxMon = result[0].mon;
            process += 50;
            if(process == 100){
                res.json(output);
            }
        })
    })
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql = "SELECT mon FROM zz_week WHERE mon<=?";
        sql += " GROUP BY mon DESC LIMIT 0,2";
        conn.query(sql,[mon],(err,result)=>{
            if(err)throw err;
            output.data = result;
            process += 50;
            if(process == 100){
                res.json(output);
            }
        });
    })
});

