const express = require('express')
const mysql = require('mysql')
const cors= require('cors')
console.log("=============================")
console.log("OhYEahhhhhhhhhhh")
console.log("=============================")
const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host     : "bhaxli32rqffrdkcvzxt-mysql.services.clever-cloud.com",
    database : "bhaxli32rqffrdkcvzxt",
    user     : "uzfhnlgexts8kuwc",
    password : "q9Be5vWI9rxsNxlzOM0S"
    
})

app.get('/',(req,resp)=>{
    return resp.json("from backend server")
})

app.get('/student',(req,resp)=>{
    const sql="select * from student"
    db.query(sql,(err, data)=>{
        if(err) return resp.json(err)
        return resp.json({data})
    })
})

app.get('/studentt',(req,resp)=>{
    const sql="select * from student"
    db.query(sql,(err, data)=>{
        if(err) return resp.json(err)
        return resp.json({data})
    })
})

app.post('/create',(req,resp)=>{
    const s=`insert into student values (${req.body.ide},'${req.body.name}','${req.body.email}')`
    db.query(s,(err,data)=>{
        console.log(s)
        if(err) return resp.json(err)
        return resp.json({data})
    })
})

app.get('/delete',(res,resp)=>{
    const d="delete from student"
    db.query(d,(err,data)=>{
        if(err) return resp.json(err)
        return resp.json({data})
    })
})

app.listen(8080,()=>{
    console.log("the server is running on port 8081")
})
