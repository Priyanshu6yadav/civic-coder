const express = require('express')

const app = express()
const port = 3050

app.get("/login",(req,res)=>{
    res.send("login page")
})
app.listen(port,()=>
{
    console.log(`server is listening login page ${port}`)
})