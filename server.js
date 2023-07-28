const express = require('express')
const mysql = require('mysql')
const cors= require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"nodedemo"
    
})

app.get('/',(req,resp)=>{
    return resp.json("from backend server")
})

app.get('/student',(req,resp)=>{
    const sql="select * from student"
    db.query(sql,(err, data)=>{
        if(err) return resp.json(err)
        return resp.json(data)
    })
})

app.post('/create',(req,resp)=>{
    const s=`insert into student values (${req.body.ide},'${req.body.name}','${req.body.email}')`
    db.query(s,(err,data)=>{
        console.log(s)
        if(err) return resp.json(err)
        return resp.json(data)
    })
})

app.listen(8081,()=>{
    console.log("the server is running on port 8081")
})