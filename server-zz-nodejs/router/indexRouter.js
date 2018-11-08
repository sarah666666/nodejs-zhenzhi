const express = require("express");
const pool = require("../pool");
var router = express.Router();
router.get("/indexWeek",(req,res)=>{
    var pno = req.query.pno;
    if(pno<1) pno = 1;
    var pnoReg = /^[0-9]{1,}$/;
    if(!pnoReg.test(pno)){
        res.json({code:-1,msg:"页码格式不正确"});
        return;
    }
    var output = {pno:pno};
    var process = 0;
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql1 = "SELECT count(pid) as c FROM zz_week";
        conn.query(sql1,(err,result)=>{
            if(err)throw err;
            output.pageCount = Math.ceil(result[0].c/6);
            process += 50;
            if(process == 100){
                res.json(output);
            }
            conn.release();
        })
    })
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var offset = (pno-1)*6;
        var sql2 = "SELECT pid,mon,week,weekIndex FROM zz_week ORDER BY pid DESC LIMIT ?,6";
        conn.query(sql2,[offset],(err,result)=>{
            if(err)throw err;
            // console.log(result);
            output.data = result;
            process += 50;
            if(process == 100){
                res.json(output);
            }
            conn.release();
        })
    })
});
router.get("/indexOuter",(req,res)=>{
    var pno = req.query.pno;
    var output = {pno:pno};
    var pnoReg = /^[0-9]{1,}$/;
    if(!pnoReg.test(pno)){
        res.json({code:-1,msg:"页码格式不正确"});
    }
    var process = 0;
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql1 = "SELECT count(oid) as c FROM zz_outer";
        conn.query(sql1,(err,result)=>{
            if(err)throw err;
            output.pageCount = Math.ceil(result[0].c);
            process += 50;
            if(process == 100){
                res.json(output);
            }
            conn.release;
        });
    })
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var offset = (pno-1)*5;
        var sql2 = "SELECT oid,title,outerIndex FROM zz_outer ORDER BY oid DESC LIMIT ?,5";
        conn.query(sql2,[offset],(err,result)=>{
            if(err)throw err;
            output.data = result;
            process += 50;
            if(process == 100){
                res.json(output);
            }
            conn.release();
        })
    })
})
module.exports = router;